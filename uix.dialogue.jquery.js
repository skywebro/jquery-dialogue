﻿(function ($) {
    var counter = 1;

    $.dialogue = function(url, options) {
        var options = $.extend({
            id: 'dialogue-' + counter++,
            autoResize: true,
            width: 'auto',
            height: 'auto',
            position: { my: 'center', at: 'center', of: window },
            modal: false,
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

        var content = $('<div id="' + options.id + '" class="' + options.dialogClass + '-content" style="display:none;"></div>').appendTo('body');
        content.load(url, options.data, function(response, status, xhr) {
            setTimeout(function() {
                content.dialog(options);
            }, 100);
            options.complete.call($(this), response, status, xhr);
        });

        return content;
    };
}(jQuery));