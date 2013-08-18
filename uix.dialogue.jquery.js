(function ($) {
    function guid() {
        var s4 = function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4());
    };

    $.dialogue = function(url, options) {
        var id = "dialogue-" + guid();
        var options = $.extend({
            position: { my: "center", at: "center", of: window },
            modal: true,
            autoResize: true,
            width: "auto",
            dialogClass: 'ui-dialogue',
            title: 'Ajax Dialog',
            data: {},
            open: function(event, ui) {
                $(this).load(url, options.data, options.complete);
            },
            close: function(event, ui) {
                $(this).remove();
            },
            complete: function(response, status, xhr) {
                /* A callback function that is executed when the request completes. */
            }
        }, options);
        var dialog = $("<div id='" + id + "' class='" + (options.dialogClass || 'ui-dialogue') + "-content' style='display:none;'></div>").appendTo('body').dialog(options);

        return dialog;
    };
}(jQuery));