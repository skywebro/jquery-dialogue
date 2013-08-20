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
            autoResize: true,
            width: 'auto',
            height: 'auto',
            position: { my: "center", at: "center", of: window },
            modal: true,
            dialogClass: 'ui-dialogue',
            title: 'Ajax Dialog',
            data: '',
            open: function(event, ui) {
            },
            close: function(event, ui) {
                $(this).remove();
            },
            complete: function(response, status, xhr) {
                /* A callback function that is executed when the request completes. */
            }
        }, options);

        var dialog = null;
        var content = $("<div id='" + id + "' class='" + (options.dialogClass || 'ui-dialogue') + "-content' style='display:none;'></div>").appendTo('body');

        content.load(url, options.data, function(response, status, xhr) {
            setTimeout(function() {
                dialog = content.dialog(options);
            }, 100);
            options.complete.call($(this), response, status, xhr);
        });

        return dialog;
    };
}(jQuery));