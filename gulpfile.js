import autoprefixer from "autoprefixer";
import browserSyncPackage from "browser-sync";
import cssnano from "cssnano";
import { build as esbuild } from "esbuild";
import gulp from "gulp";
import zipPlugin from "gulp-zip";
import nib from "nib";
import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import postcss from "postcss";
import stylus from "stylus";

const { dest, parallel, series, src, watch: watchFiles } = gulp;
const browserSync = browserSyncPackage.create();

const targetDirectory = "target";
const cssOutput = path.join(targetDirectory, "css", "main-min.css");
const videomailClientOutput = path.join(
  targetDirectory,
  "js",
  "videomail-client",
  "index-min.js",
);

function getDevelopmentServerOptions() {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    allowPositionals: true,
    strict: false,
    options: {
      host: { type: "string", default: "localhost" },
      port: { type: "string", default: "8890" },
    },
  });

  return values;
}

function start(done) {
  const { host, port } = getDevelopmentServerOptions();
  const numericPort = Number(port);
  const projectUrl = `https://${host}:${numericPort}/wp-admin/admin.php?page=ninja-forms`;

  browserSync.init(
    {
      proxy: projectUrl,
      browser: "google chrome",
      port: numericPort,
      open: false,
      injectChanges: true,
    },
    done,
  );
}

async function bundle() {
  await esbuild({
    entryPoints: ["src/js/main.js"],
    entryNames: "[name]-min",
    outdir: path.join(targetDirectory, "js"),
    format: "iife",
    target: "es2019",
    minify: true,
    sourcemap: true,
    legalComments: "none",
  });
}

async function copyVideomailClient() {
  await mkdir(path.dirname(videomailClientOutput), { recursive: true });
  await copyFile(
    "node_modules/videomail-client/dist/umd/index.js",
    videomailClientOutput,
  );
}

async function compileStylus(source, filename) {
  return new Promise((resolve, reject) => {
    stylus(source)
      .set("filename", filename)
      .use(nib())
      .render((error, css) => {
        if (error) reject(error);
        else resolve(css);
      });
  });
}

async function css() {
  const sourceFile = "src/styl/main.styl";
  const source = await readFile(sourceFile, "utf8");
  const compiledCss = await compileStylus(source, sourceFile);
  const result = await postcss([autoprefixer(), cssnano()]).process(compiledCss, {
    from: sourceFile,
    to: cssOutput,
    map: { inline: false },
  });

  await mkdir(path.dirname(cssOutput), { recursive: true });
  await writeFile(cssOutput, result.css);

  if (result.map) {
    await writeFile(`${cssOutput}.map`, result.map.toString());
  }
}

async function clean() {
  await rm(targetDirectory, { recursive: true, force: true });
}

async function cleanPhp() {
  await rm(path.join(targetDirectory, "php"), { recursive: true, force: true });
}

function copyPhp() {
  return src("src/**/*.{php,html}").pipe(dest(targetDirectory));
}

const php = series(cleanPhp, copyPhp);

function reload(done) {
  browserSync.reload();
  done();
}

function watchSources() {
  watchFiles("src/**/*.{php,html}", series(php, reload));
  watchFiles("src/js/**/*.js", series(bundle, reload));
  watchFiles("src/styl/**/*.styl", series(css, reload));
}

function zip() {
  return src(["index.php", "readme.txt", "videomail-for-ninja-forms.php", "target/**"], {
    base: "./",
  })
    .pipe(zipPlugin("videomail-for-ninja-forms.zip"))
    .pipe(dest("dist"));
}

const build = series(clean, parallel(css, bundle, copyVideomailClient, copyPhp));
const watch = series(build, start, watchSources);

export { build, clean, watch, zip };
