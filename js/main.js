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