
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

// These are hidden fields in the HTML that allow us to pass the route and certain Ids 
let routeField = $("#route")
let route = routeField.text().trim()
let accountField = $("#accountId")
let accountId = accountField.text().trim()
let contentField = $("#contentId")
let contentId = contentField.text().trim()

var stickyMenuBtnHeightCalcFlag = true;

// let textArea = $("#web-desc");
// textArea[0].innerText = (heroTxt[0].lastElementChild.innerText);


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

$("#manage-emps").click(()=>{
     if($("#manage-employee-modal").hasClass("hidden")){
          $("#manage-employee-modal").removeClass("hidden");
     }
});

$(".close-manage-employees-btn").click(()=>{
     $("#manage-employee-modal").addClass("hidden");
});


var addEmployee = $(".add-employee-btn");
// console.log(addEmployee)

addEmployee.click(()=>{

     console.log("hunter");
     if($("#add-employee-form").hasClass("hidden")){
          $("#add-employee-form").removeClass("hidden");
          $(".manage-emp-body").addClass("hidden");
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
     text: "Update Description"
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


// this updates the Description on the home page in Web_content table
let updateDescBtn = $(".submit-descript-btn");
let descText = $("#web-desc");

$(updateDescBtn).on("click", function handleFormSubmit(event) {
     event.preventDefault();
      let newDesc = {
       description: descText.val().trim(),
       AccountId: accountId
     };
      updateDesc(newDesc);
   })
function updateDesc(post) {
     $.ajax({
       method: "PUT",
       url:  `/${route}/config/desc`,
       data: post
     })
       .then(function(form) {
         window.location.href = `/${route}/config`;
     console.log(form);
     
       });
   };
   

// this adds, updates and deletes users


  // This function constructs a row - we should try to do this on the manage users form
  function createNewRow(todo) {
     var $newInputRow = $(
       [
         "<li class='list-group-item todo-item'>",
         "<span>",
         todo.text,
         "</span>",
         "<input type='text' class='edit' style='display: none;'>",
         "<button class='delete btn btn-danger'>x</button>",
         "<button class='complete btn btn-primary'>✓</button>",
         "</li>"
       ].join("")
     );
 
     $newInputRow.find("button.delete").data("id", todo.id);
     $newInputRow.find("input.edit").css("display", "none");
     $newInputRow.data("todo", todo);
     if (todo.complete) {
       $newInputRow.find("span").css("text-decoration", "line-through");
     }
     return $newInputRow;
   }
 
   // var manageUsers = $("");
let newUserBtn = $("#add-user-btn");
let newUserName = $("#new-user-name");
let newUserEmail = $("#new-user-email");
let newUserPassword = $("#new-user-password");


// $(manageUsers).on("click", function unhide(form) {
//      // console.log(form);


//      $.get(`/${hiddenField}/contact`, form, function () {


//           window.location.href = `/${route}/config`;
//      });
// })

$(newUserBtn).on("click", function addUser(event) {
     event.preventDefault();

     var newUser = {
          name: newUserName.val().trim(),
          email: newUserEmail.val().trim(),
          password: newUserPassword.val().trim(),
          // RoleId: userRoleId,
          AccountId: accountId
     };
     console.log(newUser);

     submitNewUser(newUser);

})

function submitNewUser(form) {
     $.post( `/${route}/config/user`, form, function () {
// this will need to be changed to route the user back to the manage users form
          window.location.href =  `/${route}/config`;
     });
}

let updateUserBtn = $("#update-user-btn");
let userName = $("#user-name");
let userEmail = $("#user-email");
let userPassword = $("#user-password");

$(updateUserBtn).on("click", function handleFormSubmit(event) {
     event.preventDefault();
      let updatedUser = {
          name: userName.val().trim(),
          email: userEmail.val().trim(),
          password: userPassword.val().trim(),
          // RoleId: userRoleId,
          AccountId: accountId
     };
      updateUser(updatedUser);
   })
function updateUser(post) {
     $.ajax({
       method: "PUT",
       url:  `/${route}/config/user`,
       data: post
     })
       .then(function(form) {
// this should stay on the same page but the users should refresh
          //     window.location.href = `/${route}/config`;
     // console.log(form);
     
       });
   };
   
   let deleteUserBtn = $("#del-user-btn");

   $(deleteUserBtn).on("click", function handleFormSubmit(event) {
     event.preventDefault();
      let updatedUser = {
          name: userName.val().trim(),
          email: userEmail.val().trim(),
          password: userPassword.val().trim(),
          // RoleId: userRoleId,
          AccountId: accountId
     };
      updateUser(updatedUser);
   })

   function deleteUser(id) {
     $.ajax({
       method: "DELETE",
       url:  `/${route}/config/user` + id,
     })
       .then(function() {
// this should stay on the same page but the users should refresh
          //     window.location.href = `/${route}/config`;
     // console.log(form);
     
       });
   };
   

// when the login form is done this will bring up the login form and route the user to the config page
// right now it just routes the user to the config page
$(".log-in-btn").on("click", function logIn() {
     // $(".log-on-btn").on("click", function logIn(form) {
     // console.log(form);


     // $.post(`/${route}/config`, form, function () {

          // window.location.href = `/${form.url}/config`;
          window.location.href = `/${route}/config`;
     // });
});
$(".log-off-btn").on("click", function logOff() {
     // $(".log-on-btn").on("click", function logIn(form) {
     // console.log(form);


     // $.post(`/${route}/config`, form, function () {

          // window.location.href = `/${form.url}/config`;
          window.location.href = `/${route}/`;
     // });
});



//cloudinary click handler
var myBGWidget = cloudinary.createUploadWidget({
     cloudName: 'crunchy',
     uploadPreset: 'egwkh4lw'
   }, (error, result) => {
     if (!error && result && result.event === "success") {
       console.log('Done! Here is the image info: ', result.info.url);
       $.put(`/${route}/picture/background`, {picture_url:result.info.url}, function () {
     //     console.log("AA");
         
         window.location.href = `/${form.url}`;
       });
 
     }
     // console.log(result.info.url);
   }
   )

   //WIDGET FOR LOGO, NEEDS BUTTON
// var myLogoWidget = cloudinary.createUploadWidget({
//      cloudName: 'crunchy',
//      uploadPreset: 'egwkh4lw'
//    }, (error, result) => {
//      if (!error && result && result.event === "success") {
//        console.log('Done! Here is the image info: ', result.info.url);
//        $.put(`/${route}/picture/logo`, {picture_url:result.info.url}, function () {
//      //     console.log("AA");
         
//          window.location.href = `/${form.url}`;
//        });
 
//      }
//      // console.log(result.info.url);
//    }
//    )
   
 
   
   document.getElementById("addHeroImg").addEventListener("click", function () {
     myBGWidget.open();
     if (!(customizeOverlay.hasClass("hidden"))) {
          customizeOverlay.addClass("hidden");
     }
   }, false);


     //WIDGET FOR LOGO, NEEDS BUTTON
//    document.getElementById("addHeroImg").addEventListener("click", function () {
//      myLogoWidget.open();
//      if (!(customizeOverlay.hasClass("hidden"))) {
//           customizeOverlay.addClass("hidden");
//      }
//    }, false);