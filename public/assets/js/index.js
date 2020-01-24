

$(document).ready(function(){

  //insert form id
  var accountForm = $("#my-account-form");
  
  //form inputs
  var nameInput = $(".name");
  var emailInput = $(".email");
  var passwordInput = $(".password");
  var password2Input = $(".password2");
  var phoneInput = $(".phone");
  var companyInput = $(".company");
  var addressInput = $(".address");

  var submitBtn = $(".submit-button");
  
  $(submitBtn).on("click", function handleFormSubmit(event) {
          event.preventDefault();
          // Wont submit the post if we are missing any fields or if passwords dont match
          // if (!nameInput.val().trim() || !emailInput.val().trim() || !passwordInput.val().trim() || !password2Input.val().trim() || !phoneInput.val().trim() || !companyInput.val().trim() || passwordInput != password2Input) {
          //   return;
          // }
          // Constructing a newPost object to hand to the database
          // console.log(nameInput.val());
          
          var newSubmission = {
            name: nameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            phone: phoneInput.val().trim(),
            company: companyInput.val().trim()
          };
          // console.log(newSubmission);
          
          submitForm(newSubmission);
  
  })
  
  function submitForm(form) {
      // console.log(form);
      
      $.post("/createuser", form, function() {
  
        window.location.href = "/";
      });
    }
  
  
    const modal = $(".my-modal");
    modal.click(event => {
      event.stopPropagation();
    })
    $(window).click((event) => {
  
      if (event.target.id === "create-account-btn") {
  
        if (modal.hasClass("hidden")) {
          modal.removeClass("hidden");
        }
      }
      else
        modal.addClass("hidden");
    });
  
  
    // cloudinary widget click handler 
    
    var myWidget = cloudinary.createUploadWidget({
      cloudName: 'crunchy', 
      uploadPreset: 'egwkh4lw'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
        }
      }
    )
      document.getElementById("upload_widget").addEventListener("click", function(){
        myWidget.open();
      }, false);
  
  
  });
