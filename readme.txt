=== Videomail for Ninja Forms===
Contributors: michael.heuberger, kbjohnson90
Tags: video, email, audio, webcam, recorder, getusermedia, form
Donate link: https://videomail.io/faq
Requires at least: 4.0
Tested up to: 4.6
Stable tag: 3.6.1
Requires PHP: 7.0.0 or higher
License: CC0-1.0

Record videos in Ninja Forms!

== Requirements ==

WordPress: 4.6 or higher
NinjaForms: 3.1.6 or higher
PHP: 7.0 or higher

== Description ==

With this add-on recording and sending videos in WordPress *finally* comes true. No further coding required. Just install + configure a bit (like duration, width or enable audio etc) and that’s all. Wicked.

* Record from webcam, simple
* Allow video and audio inputs in your forms, wow!
* World first solution
* Very easy to add with Ninja Forms

All you need is the Ninja Forms plugin so that this extension can be added there.

Latest version (zip file) also can be downloaded for free anytime from GitHub
[https://github.com/binarykitchen/videomail-for-ninja-forms/blob/master/dist/videomail-for-ninja-forms.zip](https://github.com/binarykitchen/videomail-for-ninja-forms/blob/master/dist/videomail-for-ninja-forms.zip)

More documentation on setup and configuration see:
[https://github.com/binarykitchen/videomail-for-ninja-forms/tree/master/doc/faq/videomail-for-ninja-forms-faq.pdf](https://github.com/binarykitchen/videomail-for-ninja-forms/tree/master/doc/faq/videomail-for-ninja-forms-faq.pdf)

== Screenshots ==

1. There will be a new Ninja Form Fields in the common section called Videomail.
2. Once you have assembled a form and preview it, any browser will ask for webcam access first.

== Options ==

That new recordable video field comes with many options you can configure yourself such as duration, width, audio on/off and much more.

Each option is explained well at bottom of this PDF file
[https://github.com/binarykitchen/videomail-for-ninja-f..orms/tree/master/doc/faq/videomail-for-ninja-forms-faq.pdf](https://github.com/binarykitchen/videomail-for-ninja-f..orms/tree/master/doc/faq/videomail-for-ninja-forms-faq.pdf)

== Whitelisting ==

For local development, everything will work right away because the localhost URL is already whitelisted on the videomail server.

But once you deploy your Wordpress site out in the wild, we will have to whitelist your production URL. For that, just submit a [Whitelist Request](https://videomail.io/whitelist). Very easy.

== Upgrade Notice ==

N/A - none needed for now.

== Support ==

To get help, just use any of these contacts at
[https://binarykitchen.com](https://binarykitchen.com)

== Live example ==

There is also the live site [videomail.io](https://videomail.io) where you can see the videomail-client in action and use it right away for free, anytime, anywhere. Many people, especially Deafs and Sign Language users, already use it for their everyday communication.

== Low level videomail-client library ==

This WordPress plugin is based on the open sourced npm package [videomail-client](https://github.com/binarykitchen/videomail-client). There you can find more information on the technical side of things.

== Frequently Asked Questions ==

See Common Questions near bottom of
[https://ninjaforms.com/docs/videomail/](https://ninjaforms.com/docs/videomail/)

== Installation ==

Just upload the zip and install the plugin. Simple as that.

Probably you also want to whitelist additional domains besides localhost. See chapter Whitelisting.

== Changelog ==

= 3.6.0 (17 March 2018) =

*Change:*

* Moved to a new, public repository and free now

= 3.5.0 (17 February 2018) =

*Features:*

* New option: save to media library - so that you can reuse the video for posts or pages yay!
* New option: image quality - with this you can improve video in cost of bandwidth

*Bugs:*

* Much better error handling

= 3.4.3 (21 December 2017) =

*Bugs:*

* Now it does not mess with other rich content text editors anymore.

= 3.4.2 (12 December 2017) =

*Bugs:*

* Added missing licensing field under settings

= 3.4.0 (12 October 2017) =

*Features:*

* Now works on iPhones running on iOS11 and on Safari v11, yay.

*Bugs:*

* Now works as an optional input (= not as a required field)

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
