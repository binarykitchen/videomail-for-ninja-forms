=== Ninja Forms Videomail ===
Contributors: binarykitchen, kbjohnson90
Tags: video, email, audio, webcam, recorder
Requires at least: 4.6
Tested up to: 4.7
Stable tag: 3.4.0
License: CC0-1.0

Record videos in Ninja Forms!

== Requirements ==

WordPress: 4.6 or higher
NinjaForms: 3.1.6 or higher
PHP: 7.0 or higher

== Description ==

With this add-on recording and sending videos in WordPress finally comes true. No further coding required. Just install + configure a bit (like duration, width or enable audio etc) and that’s all. Wicked.

Requires the Ninja Forms plugin so that this extension can be added there.

Can be purchased from here:
https://ninjaforms.com/extensions/videomail/

More documentation on setup and configuration see:
https://ninjaforms.com/docs/videomail/

== Options ==

That new recordable video field comes with many options you can configure yourself such as duration, width, audio on/off and much more.
Each option is explained well at bottom of https://ninjaforms.com/docs/videomail/

== Whitelisting ==

For local development, everything will work right away because the localhost URL is already whitelisted on the videomail server.

But once you deploy your Wordpress site out in the wild, we will have to whitelist your production URL. For that, just submit a [Whitelist Request](https://videomail.io/whitelist). Very easy.

== Support ==

To get help, just go to https://ninjaforms.com/contact/

== Live example ==

There is also the live site [videomail.io](https://videomail.io) where you can see the videomail-client in action and use it right away for free, anytime, anywhere. Many people, especially Deafs and Sign Language users, already use it for their everyday communication.

== Low level videomail-client library ==

This WordPress plugin is based on the open sourced npm package [videomail-client](https://github.com/binarykitchen/videomail-client). There you can find more information on the technical side of things.

== Changelog ==

= 3.3.3 (9 September 2017) =

*Bugs:*

* Make it work again on all Edge browsers

= 3.3.2 (27 July 2017) =

*Bugs:*

* Do not zip extension in another zip.

*Changes:*

* Bump videomail-client using ES6 code
* Improved error messages

= 3.3.1 (12 July 2017) =

*Initial Release*
