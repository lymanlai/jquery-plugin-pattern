//http://wintoni.us/post/123029056/jquery-plugin-patterns

//A plugin call with an event callback:

$('#id').myPlugin({
  option: false,
  event: function() {}
});
// or
$('#id').myPlugin('action', {
  option: false,
  event: function() {}
});

;(function($) {
  var defaults = { option: true };

  $.fn.myPlugin = function(action, options) {
    if (typeof(action) == 'object') {
      new_options = action;
      action = 'initialize';
    }
    
    this.each(function(el) {
      el = $(this);
      el.trigger('event');
      setOptions(el);
      // Do something
      // if (action == 'initialize')
    });

    function setOptions(el) {
      $.each(options, function(event, fn) {
        if (typeof(fn) == 'function') {
          el.unbind(event);
          el.bind(event, fn);
        }
      });
      options = $.extend({}, defaults, el.data('my_plugin:options'), options);
      el.data('my_plugin:options', options);
    };

    return this;
  };
})(jQuery);


/////////////////////////////
;(function($) {
  var defaults = { option: false };

  $.fn.myPlugin = function(action, options) {
    if (typeof(action) == 'object') {
      options = action;
      action = 'initialize';
    }
    
    this.each(function(el) {
      el = $(this);
      setOptions(el);
      // Do something
      // if (action == 'initialize')
      el.trigger('test_each', {
        functions: { setOptions: setOptions },
        variables: { defaults: defaults, options: options }
      });
    });

    function setOptions(el) {
      options = $.extend({}, defaults, el.data('my_plugin:options'), options);
      el.data('my_plugin:options', options);
    };

    return this;
  };
})(jQuery);