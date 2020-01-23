var navbar = $("#nav");
var hamburger = $(".hamburger");
var navGroup = $(".nav-group");
var navInner = $(".navbar-inner")
var navLinks = $(".nav-link");

hamburger.on("click", function(){
     
     if(!(hamburger.hasClass("change")))
          hamburger.addClass("change");
     else
          hamburger.removeClass("change");

     navGroup.slideToggle("slow");
})

navLinks.on("click", function(){
     
     if(hamburger.hasClass("change")){
          hamburger.removeClass("change");
     }

     if($(window).width() < 1000)
          navGroup.slideToggle("slow");
});