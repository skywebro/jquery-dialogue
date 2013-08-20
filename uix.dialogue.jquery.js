(function ($) {
    function guid() {
        var s4 = function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4());
    };

    $.dialogue = function(url, options) {
        var options = $.extend({
            id: "dialogue-" + guid(),
            autoResize: true,
            width: 'auto',
            height: 'auto',
            position: { my: "center", at: "center", of: window },
            modal: true,
            dialogClass: 'uix-dialogue',
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
        var content = $("<div id='" + options.id + "' class='" + options.dialogClass + "-content' style='display:none;'></div>").appendTo('body');

        content.load(url, options.data, function(response, status, xhr) {
            setTimeout(function() {
                dialog = content.dialog(options);
            }, 100);
            options.complete.call($(this), response, status, xhr);
        });

        return content;
    };
}(jQuery));