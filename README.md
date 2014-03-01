AjaxFeedback
=========

jQuery plugin for handling the display of JSON messages sent using AJAX in order to provide relevant feedback for the user.

**In short - Simplifies AJAX messages.**

Version
----

0.1

Dependencies
-----------

AjaxFeedback depends solely on jQuery. The plugin was tested on jQuery v2.1.0, however it should even work with pre-historic version of jQuery.

Installation
--------------
#### Through Volo
```sh
volo add shillo92/ajaxfeedback 
```

#### Through GitHub

```sh
git clone https://github.com/shillo92/ajaxfeedback myproject
```

RequireJS
------
Remember that this plugin depends jQuery so remember to either set it up in your requireJS configurations like so:
```javascript
require.config({
    shim: {
        'ajaxfeedback' : ['jquery']
    }
});
```
Or you can also load it through define/require:
```javascript
define(['jquery', 'ajaxfeedback'], function ($) {
    // Do whatever you want...
});
```

How to use
----
1. Create a placeholder element.
```html
<div id="messages"></div>
```
2. Create a file to return JSON data.
3. Load jQuery.
4. Load the **AjaxFeedback** plugin.
```html
<script type="text/javascript" src="js/ajaxfeedback.js"></script>
```
5. Within your main javascript code, make the following call to the plugin:
```javascript
$(document).ready(function () {
    $.getJSON("data/example.json", function (data) {
        $('#messages').ajaxFeedback({
            returnedData: data
        });
    });
});
```
6. Fire your application

#### Example

The following example assumes you rely on [RequireJS](http://requirejs.org).

Inside *example.html*
```html
<!-- Pressing this button will fetch and display messages from JSON file -->
<button type="button" id="showMessages">Show Messages</button>

<!-- We'll attach all messages to this div -->
<div id="messages"></div>
```

*data/example.json*
```json
{
    "messages" : {
        "error" : {
            "email" : [
                "Invalid email address supplied"
            ],
            "username" : [
                "Invalid username. Username can only contain alphabetic characters."
            ]
        },

        "success" : {
            "country" : [
                "Well, at least you specified a valid country name."
            ]
        },

        "info" : {
            "password" : [
                "Tip: you should specify a good password!"
            ]
        }
    }
}
```

*js/main.js*
```javascript
require(['jquery'], function ($) {
    $(document).ready(function () {
        $('#showMessages').click(function () {
            // Make the JSON AJAX request
            $.getJSON("data/example.json", function (data) {
                // After successful request, load the ajaxfeedback plugin
                require(['ajaxfeedback'], function () {
                    // Make our #messages div into feedbacks container
                    $('#messages').ajaxFeedback({
                        returnedData: data
                    });
                });
            });
        });
    });
});
```

License
----

GPL


**This free plugin is provided to you by Shillo Ben David**

    