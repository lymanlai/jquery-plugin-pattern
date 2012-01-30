// officer: http://docs.jquery.com/Plugins/Authoring
;(function( $ ){
    var methods = {
            init : function( options ) {
                var defaults = {
                        'location'         : 'top',
                        'background-color' : 'blue'
                    };
                    
                return this.each(function(){
                    var $this = $(this),
                        data = $this.data('tooltip'),
                        tooltip = $('<div />', {
                            text : $this.attr('title')
                        });
                 
                    // If the plugin hasn't been initialized yet
                    if ( ! data ) {
                        // Create some defaults, extending them with any options that were provided
                        var settings = $.extend( {}, defaults, options);
                        $(this).data('tooltip', {
                            target : $this,
                            tooltip : tooltip
                        });
                    }
               });
            },
            destroy : function( ) {
                return this.each(function(){
                    var $this = $(this),
                        data = $this.data('tooltip');

                    // Namespacing FTW
                    $(window).unbind('.tooltip');
                    data.tooltip.remove();
                    $this.removeData('tooltip');
                })

            },
            reposition : function( ) { 
                // ... 
            },
            show : function( ) { 
                // ... 
            },
            hide : function( ) { 
                // ... 
            },
            //$('div').tooltip('update', 'This is the new tooltip content!'); //even more args can be add automaticly
            update : function( content ) { 
                // ...
            }
        };

    $.fn.tooltip = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }    
    };
})( jQuery );