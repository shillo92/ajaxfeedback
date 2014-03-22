require(['jquery', 'ajaxfeedback'], function ($) {
    $(document).ready(function () {
        var $showMessageButtons = $('.showMessage');

        $($showMessageButtons).click(function () {
            var url = $showMessageButtons.data('url');
            // Make our #messages div into feedbacks container
            $(this).ajaxFeedback({
                target: '#messages',
                onBadFeedback: function(data) {
                    $("#successIndicator").ajaxFeedback("Invalid input, please try again!");
                }
            });
        });
    });
});