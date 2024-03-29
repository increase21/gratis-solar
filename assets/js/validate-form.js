
// Field Masks
$("#phonePrimary").mask("(999) 999-9999", { placeholder: "  " });
$("#zip").mask("99999", { placeholder: " " });

// Form validation
$("#msform").validate({
   //	errorPlacement: function(){
   //		return false;  // suppresses error message text
   //	},
   rules: {
      firstName: "required",
      lastName: "required",
      address: "required",
      city: "required",
      state: "required",
      zip: "required",
      country: "required",
      email: {
         required: true,
         email: true,
         remote: {
            crossDomain: true,
            message: 'Invalid email',
            url: 'https://api.imgleads.com/data/verify-email.ashx',
            name: 'email',
            threshold: 4
         }
      },
      phonePrimary: {
         required: true,
         remote: {
            crossDomain: true,
            message: 'Invalid Phone',
            url: 'https://api.imgleads.com/data/verify-phone.ashx',
            name: 'phone',
            threshold: 4,
            data: {
               phone: function () {
                  return $("#phonePrimary").val();
               }
            }
         }
      },
      homeOwner: "required",
      propertyType: "required",
      monthlyBill: "required",
      currentProvider: "required",
      roofType: "required",
      roofShade: "required",
      creditRating: "required",
      projectStatus: "required",
      timeFrame: "required",
      leadid_tcpa_disclosure: "required",
      authorizeChange: "required"
   },
   messages: {
      firstName: '<i class="fa fa-times-circle"></i>',
      country: '<i class="fa fa-times-circle"></i>',
      lastName: '<i class="fa fa-times-circle"></i>',
      address: '<i class="fa fa-times-circle"></i>',
      city: '<i class="fa fa-times-circle"></i>',
      state: '<i class="fa fa-times-circle"></i>',
      zip: '<i class="fa fa-times-circle"></i>',
      email: '<i class="fa fa-times-circle"></i>',
      homeOwner: '<i class="fa fa-times-circle"></i>',
      phonePrimary: '<i class="fa fa-times-circle"></i>',
      propertyType: '<i class="fa fa-times-circle"></i>',
      monthlyBill: '<i class="fa fa-times-circle"></i>',
      currentProvider: '<i class="fa fa-times-circle"></i>',
      roofType: '<i class="fa fa-times-circle"></i>',
      roofShade: '<i class="fa fa-times-circle"></i>',
      creditRating: '<i class="fa fa-times-circle"></i>',
      projectStatus: '<i class="fa fa-times-circle"></i>',
      timeFrame: '<i class="fa fa-times-circle"></i>',
      authorizeChange: '<i class="fa fa-times-circle"></i>',
      leadid_tcpa_disclosure: '!'
   }
});


$('#submitButton').on('click', async (e) => {
   e.preventDefault()
   e.stopImmediatePropagation()

   // async function DoSignup(form) {

   // Validate the form 1 last time
   //formValidation = $('#enrollForm1').data('formValidation');
   enrollForm1 = $('#msform');

   enrollForm1.validate();

   if (enrollForm1.valid()) {
      $('#submitButton').prop('disabled', true)
      // DO IP LOOKUP BEFORE SUBMITTING THE FORM
      // Do IP Address Lookup
      let userIp = await $.getJSON('https://api.ipify.org?format=jsonp&callback=?')
      // get the Leadid
      let Leadid = $('#leadid_token').val()
      // get the URL
      let originURL = location.href
      // Live
      var url = "https://gratisdigital.listflex.com/lmadmin/api/leadimport.php?";
      // get all the form inputs
      // Live Params
      let formData = $('#msform').serialize();
      formData += `&apikey=F9AW57HCQW1R4JOM5&list_id=1576&cust_field_71=${Leadid}&ip=${userIp.ip}&offer=${originURL}`
      // Test Params
      // var formData = `apikey=P7IYXSYHAIFMBQ94FPD&list_id=1575&cust_field_71=${Leadid}&ip=${userIp.ip}&offer=${originURL}&`
      // append the form input with the url
      let callUrl = url + formData
      // Fire Facebook Pixel for registration
      dataLayer.push({ 'event': 'CompleteRegistration' });
      // submit to the database
      $.ajax({
         type: "GET",
         url: callUrl,
         // dataType: 'json',
         beforeSend: function () {
            // Disable the button and Open the Modal dialog to show Processing....
            $('#signupButton').attr('disabled', 'disabled');
            $('#modalProcessing').modal({ backdrop: 'static', keyboard: false });
         }
      })
         .done(function (data) {
            if (data == 'Success') {
               $('.modal-dynamic-content').html(textSuccess)
            }
            else {
               $('.modal-dynamic-content').html(textFail)
            }
         })
         .fail(function (jqXHr, textStatus, errorThrown) {
            // show an error message
            $('#modalProcessing').modal('toggle');
            $('#errorContainer').css('display', 'block');
            $('#errorMessage').html('We\'re sorry, an error occurred. Please try again in a few minutes.');
         })
         .always(function () {
            //console.log('Always');
            $('#signupButton').removeAttr('disabled');
         });
   }
   else {
      // console.log('form not validated!');
      $('html, body').animate({
         scrollTop: $('.error').first().offset().top - 120
      }, 500);
      $('.error').first().find('input').focus();
   }
})
// close the modal once the close btn is clicked
$('body').on('click', '.modal-btn', function () {
   location.reload()
})

const textSuccess = `<div><h2 class="green-text">THANK YOU FOR YOUR REQUEST</h2>
      <h4 class="mt-3">One of our agents will contact your shortly</h4>
      <p><button class="btn mt-2 bg-green white-text modal-btn">Close</button>
      </div>`
const textFail = `<div><h2 class="red-text">Oops!</h2>
      <h4 class="mt-3">Something went wrong with your submission, try again</h4>
      <p><button class="btn mt-2 bg-red modal-btn">Try Again</button>
      </div>`
