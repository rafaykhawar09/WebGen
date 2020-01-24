

$(document).ready(function () {

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

  var url=[]

  var submitBtn = $(".submit-button");



  $(submitBtn).on("click", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing any fields or if passwords dont match
    // if (!nameInput.val().trim() || !emailInput.val().trim() || !passwordInput.val().trim() || !password2Input.val().trim() || !phoneInput.val().trim() || !companyInput.val().trim() || passwordInput != password2Input) {
    //   return;
    // }
    // Constructing a newPost object to hand to the database
    // console.log(nameInput.val());

    //variable to clean up
    url = companyInput.val().trim().toLowerCase().replace(/[^\w]/gi, '');


    var newSubmission = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      phone: phoneInput.val().trim(),
      company: companyInput.val().trim(),
      address: addressInput.val().trim(),
      url: url
    };
    console.log(newSubmission);

    submitForm(newSubmission);

  })

  function submitForm(form) {
    // console.log(form);

    $.post("/createuser", form, function () {

      window.location.href = `/${form.url}`;
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
    uploadPreset: 'egwkh4lw'
  }, (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info.url);
      $.post(`/biss/picture`, {picture_url:result.info.url}, function () {
        console.log("AA");
        
        // window.location.href = `/${form.url}`;
      });

    }
  }
  )
  console.log(url);
  

  
  document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
  }, false);
  

  // const eventData = result.data;
  // if (eventData.event === "queues-end") {
  //   eventData.info.items.forEach((item) => {
  //     console.log(`show completed for item with id: 
  //     ${item.uploadInfo.public_id}`); //uploadInfo is the data returned in the upload response
  //   });
  // }

  
  
//   result = {
//     event: "queues-end",
//     info: {} // information about all files processed by the api
// };







//end of documment.ready function
});
