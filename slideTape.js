/*
 * NOs imnosok@gmail.com
 * spesial for meettoday
 */

(function( $ ){
var  settings;

  var methods = {
    init : function( options ) { 
      // ИНИТ
       settings = $.extend( {
       'width'         : '588px'
     
    }, options);
       var object=this;   
      $(this).css("width",settings['width']);
   
       $(this).find(".next").click(function(){
       
           methods.next.apply(object, arguments); 
       });
       
       $(this).find(".back").click(function(){
       
           methods.back.apply(object, arguments); 
       }); 
   
   
      return this;
    },
    next : function() {
     
      $("."+$(this).attr("class")+' ul.slider  li:first').appendTo("."+$(this).attr("class")+' ul.slider');    
    },
    back : function( ) {
      $("."+$(this).attr("class")+" ul.slider  li:last").prependTo($("."+$(this).attr("class")+" ul.slider"));
    }
   
  };

  $.fn.slideTape = function( method ) {
    if (methods[method]) {    
      return methods[method].apply(this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
    
      //$('#overflow').click(methods.hideDialog);
      return methods.init.apply(this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.modalDialog' );
    } 
  };

})( jQuery );

