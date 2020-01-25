var navbar = $("#nav");
var hamburger = $(".hamburger");
var navGroup = $(".nav-group");
var navInner = $(".navbar-inner")
var navLinks = $(".nav-link");
var rightIcon = $(".fa-caret-right");
var leftIcon = $(".fa-caret-left");

var menuLink = $(".menu-link");

var hiddenField = $(".hidden-field");

$(menuLink).on("click", function addField(form) {
     // console.log(form);
 
     $.post(`/${hiddenField}/menu`, form, function () {
 
       window.location.href = `/${form.url}`;
     });
   })

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

$(".sticky-menu").on("click", ()=>{
     $(".sticky-nav-group-wrapper").toggle("slide");

     if(rightIcon.hasClass("hidden")){
          rightIcon.removeClass("hidden");
          leftIcon.addClass("hidden");
     }
     else{
          rightIcon.addClass("hidden");
          leftIcon.removeClass("hidden");
     }
});

const modal = $(".employees");
  modal.click(event => {
    event.stopPropagation();
  })
  $(window).click((event) => {

    if (event.target.id === "manage-employees-btn") {

      if (modal.hasClass("hidden")) {
        modal.removeClass("hidden");
      }
    }
    else
      modal.addClass("hidden");
  });