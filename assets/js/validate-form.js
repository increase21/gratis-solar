


// Billing Addr Checkbox
/*
$('#chkTerms').change(function() {
	if($(this).is(":checked")) 
	{
		$('#termsError').css('display', 'none');
	}
});
*/


// Field Masks
$("#phonePrimary").mask("(999) 999-9999",{placeholder:"  "});
$("#zip").mask("99999",{placeholder:" "});

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
					phone: function() {
						return $( "#phonePrimary" ).val();
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
		tcpaYes: "required"
	},
	messages: {
		firstName: '<i class="fa fa-times-circle"></i>',
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
		tcpaYes: '!'
	}
});


//$('#submit-form-button').on('click', function(e){
function DoSignup(form)
{
	
	// Validate the form 1 last time
    //formValidation = $('#enrollForm1').data('formValidation');
	enrollForm1 = $('#msform');
	
    enrollForm1.validate();
	
    if(enrollForm1.valid())
	{
        //console.log('Form is valid!');

		// Live
        var url = "/_post.php";
		// Test
        //var url = "/_post.php";
		
        var formData = $('#msform').serialize();
		
		// DEBUG
		//console.log('URL: ' + url);
		//console.log('Request: ' + formData);

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            dataType: 'json',
            beforeSend: function() {
				// Disable the button and Open the Modal dialog to show Processing....
				$('#signupButton').attr('disabled','disabled');
				$('#modalProcessing').modal({ backdrop: 'static', keyboard: false });
            }
        })
        .done(function(data) {
            
			// DEBUG
			//console.log(data);
			
			if(data.Status == 'Accepted') 
			{
				// DEBUG
				//console.log('Done, Purchased!');
				
				// Facebook conversion tracking
				//fbq('track', 'Purchase', {value: data.Price, currency: 'USD'});
				
				// Redirect to Thank You page
				location = 'thank-you.php?success=true';
			}
			else 
			{
				// DEBUG
				//console.log('Done, Not Purchased!');
				
				// Redirect to Thank You page
				location = 'thank-you.php?success=false';
			}

        })
        .fail(function(jqXHr, textStatus, errorThrown) {
            // DEBUG
			//console.log('Fail');
            //console.log('jqXHr.responseText: ' + jqXHr.responseText);
            //console.log('textStatus: ' + textStatus);
            //console.log('errorThrown: ' + errorThrown);
			// show an error message
			$('#modalProcessing').modal('toggle');
			$('#errorContainer').css('display','block');
			$('#errorMessage').html('We\'re sorry, an error occurred. Please try again in a few minutes.');
        })
        .always(function() {
			//console.log('Always');
			$('#signupButton').removeAttr('disabled');
        });        
    }
    else
	{
        console.log('form not validated!');
        $('html, body').animate({
            scrollTop: $('.error').first().offset().top-120
        }, 500);
        $('.error').first().find('input').focus();      
    }    
	
	return false;
	
}
