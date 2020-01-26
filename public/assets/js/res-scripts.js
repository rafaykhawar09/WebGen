
var navbar = $(".navbar");
var hamburger = $(".hamburger");
var navGroup = $(".nav-group");
var navInner = $(".navbar-inner")
var navLinks = $(".nav-link");
var rightIcon = $(".fa-caret-right");
var leftIcon = $(".fa-caret-left");
var customizeOverlay = $("#web-content");
var customizePg = $("#customize-page");
var stickyNavgroup = $(".sticky-nav-group-wrapper");
var stickyMenuBtn = $(".sticky-menu");

var heroTxt = $(".hero-txt");
var heroTxtZindex = heroTxt.css("z-index");
var heroTxtWidth = heroTxt[0].scrollWidth;
var heroTxtHeight = heroTxt[0].scrollHeight;

var navbarWidth = navbar[0].scrollWidth;
var navbarHeight = navbar[0].scrollHeight;

var stickyMenuBtnHeightCalcFlag = true;

var textArea = $("#one-liner");
textArea[0].innerText = (heroTxt[0].lastElementChild.innerText);


hamburger.on("click", function () {

     if (!(hamburger.hasClass("change")))
          hamburger.addClass("change");
     else
          hamburger.removeClass("change");

     navGroup.slideToggle("slow");
})

navLinks.on("click", function () {

     if (hamburger.hasClass("change")) {
          hamburger.removeClass("change");
     }

     if ($(window).width() < 1000)
          navGroup.slideToggle("slow");
});

$(".sticky-menu").on("click", () => {

     $(".sticky-nav-group-wrapper").toggle("slide");

     if (rightIcon.hasClass("hidden")) {
          rightIcon.removeClass("hidden");
          leftIcon.addClass("hidden");
     }
     else {
          rightIcon.addClass("hidden");
          leftIcon.removeClass("hidden");
     }
});

$(".sticky-nav-link").on("click", () => {
     $(".sticky-nav-group-wrapper").toggle("slide");

     if (rightIcon.hasClass("hidden")) {
          rightIcon.removeClass("hidden");
          leftIcon.addClass("hidden");
     }
     else {
          rightIcon.addClass("hidden");
          leftIcon.removeClass("hidden");
     }
})

$(".close-overlay").click(() => {

     if (!(customizeOverlay.hasClass("hidden"))) {
          customizeOverlay.addClass("hidden");
     }
});

customizePg.click(() => {
     if (customizeOverlay.hasClass("hidden")) {
          customizeOverlay.removeClass("hidden")
     }
});



jQuery("<div/>", {
     class: "heroTxt-overlay"
}).appendTo(customizeOverlay);

jQuery("<div/>", {
     class: "navbar-overlay"
}).appendTo(customizeOverlay);

$(".heroTxt-overlay").css({ "width": (heroTxtWidth + 30), "height": (heroTxtHeight + 30) });

$(".navbar-overlay").css({ "width": "100%", "height": (navbarHeight) });

jQuery("<i/>", {
     id: "addDescription",
     class: "fas fa-plus-circle"
}).appendTo(($(".heroTxt-overlay")));

jQuery("<label/>", {
     for: "addDescription",
     text: "Update a Description"
}).appendTo(($("#addDescription")));


jQuery("<i/>", {
     id: "addTheme",
     class: "fas fa-plus-circle"
}).appendTo($(".navbar-overlay"));

jQuery("<label/>", {
     for: "addTheme",
     text: "Font/Color Theme"
}).appendTo(($("#addTheme")));


jQuery("<i/>", {
     id: "addHeroImg",
     class: "fas fa-plus-circle"
}).appendTo(($(".customize-overlay")));

jQuery("<label/>", {
     for: "addHeroImg",
     text: "Add a Background Image"
}).appendTo(($("#addHeroImg")));

var descriptionModal = $("#add-description-modal");
$("#addDescription").click(()=>{
     if(descriptionModal.hasClass("hidden")){
          descriptionModal.removeClass("hidden");
     }
});


//click handlers for CRUD functionality in modals

// var manageUsers = $("");
// var submitNewUserBtn = $("");
// var deleteUser = $("");
// var updateUser = $("");


// var userNameInput = $("");
// var userEmailInput = $("");
// var userPasswordInput = $("");


// $(manageUsers).on("click", function unhide(form) {
//      // console.log(form);


//      $.get(`/${hiddenField}/contact`, form, function () {


//           window.location.href = `/${form.url}`;
//      });
// })


// $(submitNewUser).on("click", function addUser(form) {
//      // console.log(form);

//      $.post(`/${hiddenField}/user`, form, function () {

//           window.location.href = `/${form.url}`;
//      });
// })

// $(submitUserBtn).on("click", function addUser(event) {
//      event.preventDefault();

//      var newSubmission = {
//           name: userNameInput.val().trim(),
//           email: userEmailInput.val().trim(),
//           password: userPasswordInput.val().trim(),
//      };
//      console.log(newSubmission);

//      submitNewUser(newSubmission);

// })

// function submitForm(form) {
//      // console.log(form);

//      $.post("/createaccount", form, function () {

//           window.location.href = `/${form.url}`;
//      });
// }

// $(".log-on-btn").on("click", function logIn(form) {
//      // console.log(form);


//      $.post(`/${hiddenField}/config`, form, function () {

//           window.location.href = `/${form.url}/config`;
//      });
// });