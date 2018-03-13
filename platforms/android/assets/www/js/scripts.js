$(document).ready(function() {
  function setCSS() {
    var windowHeight = $(window).innerHeight();

    $('.conent-container p').css('max-height', $(window).innerHeight()/3.5);
    $('.swiper-slide').css('height', $(window).innerHeight());
    $('.dragend-page').css('height', $(window).innerHeight());
    $('body').css('min-height', $(window).innerHeight());


 
    
  };
  setCSS();
  
  $(window).resize(function() {
    setCSS();
  });
});



$(window).load(function() {
  function setCSS() {
    var windowHeight = $(window).innerHeight();

     $('.conent-container p').css('max-height', $(window).innerHeight()/3.5);
    $('.swiper-slide').css('height', $(window).innerHeight());
    $('.dragend-page').css('height', $(window).innerHeight());
    $('body').css('min-height', $(window).innerHeight());



 
    
  };
  setCSS();
  
  $(window).resize(function() {
    setCSS();
  });
});




// responsive font size

$('body').smartflow({
 minimum   : 100,
 maximum   : 1200,
 minFont   : 6,
 maxFont   : 25,
 fontRatio : 30,
 lineRatio : 1.45
}); 

















