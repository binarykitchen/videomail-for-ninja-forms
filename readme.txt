=== Videomail for Ninja Forms ===
Contributors: michael.heuberger, kbjohnson90
Tags: form, video, email, audio, webcam, recorder, sign language, deaf
Requires at least: 5.2.0
Donate link: https://videomail.io/faq
Tested up to: 6.0.0
Stable tag: 3.11.1
License: CC0-1.0

Record videos in Ninja Forms!

== Description ==
With this add-on recording and sending videos in WordPress *finally* comes true. No further coding required. Just install + configure a bit (like duration, width or enable audio etc) and that’s all. Wicked.

* Record from webcam, simple
* Allow *video* and *audio* inputs in your forms, wow!
* World first solution
* Very easy to add with Ninja Forms

All you need is the Ninja Forms plugin so that this extension can be added there.

Latest version (zip file) also can be downloaded for free anytime from GitHub:
[https://github.com/binarykitchen/videomail-for-ninja-forms/blob/master/dist/videomail-for-ninja-forms.zip](https://github.com/binarykitchen/videomail-for-ninja-forms/blob/master/dist/videomail-for-ninja-forms.zip)

More documentation on setup and configuration see:
[https://github.com/binarykitchen/videomail-for-ninja-forms/tree/master/doc/faq/videomail-for-ninja-forms-faq.pdf](https://github.com/binarykitchen/videomail-for-ninja-forms/tree/master/doc/faq/videomail-for-ninja-forms-faq.pdf)

== Installation ==
This section describes how to install the plugin and get it working.
1. Upload the `videomail-for-ninja-forms` plugin folder to your `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Visit the 'Ninja Forms' menu item in your admin sidebar
4. Build a form using videomail

Probably you also want to whitelist additional domains besides localhost. See whitelisting under FAQ.

== Frequently Asked Questions ==

= Donations? =
That would be awesome :) Scroll to bottom of https://videomail.io/faq

= Where is the documentation? =
Check out that pretty online PDF at [https://github.com/binarykitchen/videomail-for-ninja-forms/blob/master/doc/faq/videomail-for-ninja-forms-faq.pdf](https://github.com/binarykitchen/videomail-for-ninja-forms/blob/master/doc/faq/videomail-for-ninja-forms-faq.pdf)

= What options are there? =
That new recordable video field comes with many options you can configure yourself such as duration, width, audio on/off and much more.

Each option is explained well at bottom of this PDF file: [Videomail FAQ](https://github.com/binarykitchen/videomail-for-ninja-forms/tree/master/doc/faq/videomail-for-ninja-forms-faq.pdf)

= How does whitelisting work? =
For local development, everything will work right away because the localhost URL is already whitelisted on the videomail server.

But once you deploy your Wordpress site out in the wild, we will have to whitelist your production URL. For that, just submit a [Whitelist Request](https://videomail.io/whitelist). Very easy.

= Is there a live example? =
There is also the live site [videomail.io](https://videomail.io). Have a look and play.
You can see the videomail-client in action and use it right away for free, anytime, anywhere. Many people, especially Deafs and Sign Language users, already use it for their everyday communication.

= Can I use videomail outside of WordPress? =
Yes. There is a low level npm [videomail-client](https://github.com/binarykitchen/videomail-client) package. This WordPress plugin relies on it.

= Where is the support? =
To get help, just use any of these contacts at [https://binarykitchen.com](https://binarykitchen.com)

== Screenshots ==
1. There will be a new Ninja Form Fields in the common section called Videomail.
2. Once you have assembled a form and preview it, any browser will ask for webcam access first.

== Upgrade Notice ==

= 3.11.2 (11 Jun 2022) =

*Tasks:*
* Tested everything on latest WordPress v6.0.0 and works well

*Change:*
* Upgraded all internal libraries, especially Videomail-Client on npm (they come with lots of stability fixes)

= 3.11.1 (28 Aug 2021) =

*Change:*
* Just a maintenance bump using latest Videomail-Client
* Better treatment of undefined form inputs

= 3.11.0 (19 Jul 2021) =

*Change:*
* Switch to node.js v16 and npm v7.18
* Runs security audit toward all dependencies

= 3.10.4 (12 Jul 2021) =

*Change:*
* Countdown and pause texts are bolder now

= 3.10.3 (29 Jan 2021) =

*Bugs:*
* Another workaround for more global pollution situations

= 3.10.2 (29 Jan 2021) =

*Bugs:*
* Works for older Backbone versions too or when other plugins pollute its global scope.

= 3.10.1 (5 Dec 2020) =

*Change:*
* Bump min required and tested versions

= 3.10.0 (5 Dec 2020) =

*Bugs:*
* Make it work along with the Conditional Logic add-on
* Required attribute works again with latest WP and Ninja Form versions
*Change:*
* Upgrades Videomail dependency

= 3.9.8 (20 Oct 2020) =

*Bugs:*
* Fixed wrong FPS calculation. Now overall quality of encoded videos won't be impacted when connectivity deteriorates toward the end.
*Change:*
* Upgrades Videomail dependency

= 3.9.7 (9 Sept 2020) =

*Improvements:*
* Better release procedure
* Consistent source code

= 3.9.6 (16 Jun 2020) =

*Change:*
* Upgrades Videomail dependency

= 3.9.5 (16 Jun 2020) =

*Bugs:*
* Flip video feed horizontally to match with reality (all webcams are inverted by default)

= 3.9.4 (13 Mar 2020) =

*Bugs:*
* Ping more often to keep connection alive
* Also submit disabled form inputs

= 3.9.3 (7 Nov 2019) =

*Bugs:*
* Do not enable audio when already false

= 3.9.2 (7 Nov 2019) =

*Bugs:*
* Repaired merging fields into strings

= 3.8.1 (7 Nov 2019) =

*Bugs:*
* Repair readme.txt

= 3.8.0 (6 Nov 2019) =

*Change:*
Lots improved under the hood, updated many libraries for speed and security.

*Bugs:*
* Works again on IE11

= 3.7.4 (3 Sep 2019) =

*Bugs:*
* Fix invalid URLs for Windows machines

= 3.7.3 (27 Aug 2019) =

*Bugs:*
* Correct error message when on insecure HTTP with recommendation to switch to HTTPS
* Works again on older iPhones

*Change:*
* Replaced lots of old code with modern code.

= 3.7.2 (8 May 2019) =

*Change:*
* Better readystate handling for faster page loads
* Improved error messages for iOS on Chrome
* Faster websocket streams

= 3.7.1 (14 Jan 2019) =

*Change:*
* Audio now enabled by default
* Improved documentation

*Bugs:*
* More robust with exotic browsers
* Correct bad spelling

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
