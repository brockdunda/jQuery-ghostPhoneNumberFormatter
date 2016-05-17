;( function($, window) {

  /* *******************
   * phoneNumberFormatter methods - Formats phone numbers automatically.
   */
  var methods = {
    init : function(options){
      var $this = $(this);
      $this.on('keyup', function() {
        // Remove non-numeric characters
        var val = this.value.replace(/\D/g, '');

        // If it's something unexepected, such as 1-800 or with country code, abort
        if (val.slice(0, 1) == 1)
          return this.value = val;

        if (val.length > 0)
          val = '(' + val;

        if (val.length > 4)
          val = val.slice(0, 4) + ') ' + val.slice(4);

        if (val.length > 9)
          val = val.slice(0, 9) + ' - ' + val.slice(9, 13);

        this.value = val;
      });
      return this;
    }
  }

  $.fn.phoneNumberFormatter = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
    } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.phoneNumberFormatter' );
    }
  }
}(jQuery, window));
