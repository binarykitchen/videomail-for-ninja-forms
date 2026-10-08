# Playground

For any updates of this plugin, we developers can try to do the following:

1. (Optional, for developers) Wait a while after `npm run release` to ensure the release process has completed and has been confirmed by email from WordPress.
2. Then, log into <https://tastewp.com/dashboard/>
3. (Optional) Delete the previous site.
   - Because they cache the versions of the plugins, deleting and recreating the site ensures you are testing the latest release.
4. Create a new temporary WordPress site picking all their default options.
   - Copy the new credentials & info just in case.
   - Click on the "Access it now" button.
5. Search by "Ninja" in the plugin search bar and then
   - **Install** & **Activate** the Ninja Forms plugin in two separate steps.
6. Then also search by "Videomail", then
   - **Install** & **Activate** the Videomail for Ninja Forms plugin in two separate steps.
7. Once reloaded, under WP Admin, go to Ninja Forms > Import /Export and

   - select [the example template form](./../examples/nf_form_video_contact_us.nff), and
   - hit the import form button.

8. Click on "View form" to see the form in action.
9. Update that preview URL in this documentation accordingly.
