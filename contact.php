<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact Us</title>
    
    <link rel="shortcut icon" href="assets/img/favico.ico" type="image/x-icon" />
    <meta name="msapplication-square70x70logo" content="/assets/img/icons/smalltile.png" />
    <meta name="msapplication-square150x150logo" content="/mediumtile.png" />
    <meta name="msapplication-wide310x150logo" content="/assets/img/icons/widetile.png" />
    <meta name="msapplication-square310x310logo" content="/assets/img/icons/largetile.png" />
    
    <!-- Bootstrap -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/bootstrap-theme.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/msform.css" rel="stylesheet">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
	<script type="text/javascript" src="assets/js/jquery-2.1.4.min.js"></script>
</head><body id="index">
	<nav class="navbar navbar-default navbar-fixed-top" role="navigation" data-offset-top="550">
      <div class="container-fluid bg-blue-drk">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" id="hamburger-button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
         
			
		<img src="assets/img/logo-text.jpg" id="logo_img_size" height="36">
			
		
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" >
			
          <ul class="nav navbar-nav navbar-right" style="margin-right:10px;">
            <li><a class="dropdown" href="index.html">Home</a></li>
            <li><a class="dropdown" href="terms.php">Terms of Service</a></li>
            <li><a class="dropdown" href="privacy.php">Privacy Policy</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    
    <section class="privacyTerms" style="padding-top:6rem">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-lg-offset-3">
          
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          
            <h1>Contact Us</h1>
            
            <p>
                Questions or comments?  Please let us know!
            </p>
            
            <div id="result" class="contact_p" style="padding-bottom:10px;"></div>
            
            <form action="http://www.topsolaroffers.com/contact_us.php" id="main-contact-form" class="contact-form row" name="contact-form" method="post">
                <div class="form-group col-md-12">
                    <input type="text" id="name" name="name" class="form-control" required placeholder="Name">
                </div>
                <div class="form-group col-md-12">
                    <input type="text" id="email" name="email" class="form-control" required placeholder="Email Address">
                </div>
                <div class="form-group col-md-12">
                    <input type="text" id="phone" name="phone" class="form-control" required placeholder="Phone Number">
                </div>
                <div class="form-group col-md-12">
                    <textarea name="message" id="message" required class="form-control" rows="8" placeholder="Your Comment Here"></textarea>
                </div>                        
                <div class="form-group col-md-12">
                    <input type="button" OnClick="sendInquiry();" name="submit" class="btn_css2 btn btn-primary" value="SEND">
                </div>
            </form>
            
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            
          </div>
        </div>
      </div>
    </section>


	<script type="text/javascript">
	
		function IsEmail(email) {
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}
		
		function IsPhone(phone) {
			var reg = /^([0-9])+$/;
			var x= document.getElementById("phone").value;
			if(x.length!=10)
			{
				return false;  
			}
			return reg.test(phone);
		}
		
		function sendInquiry()
		{
			$("#result").html('');
			if(document.getElementById('name').value=='')
			{
				$("#result").html('Please enter your Name.');
				return;
			}
			
			if(!IsEmail(document.getElementById('email').value))
			{
				$("#result").html('Please enter a valid email address.');
				return;
			}
			
			if(document.getElementById('phone').value=="")
			{
				$("#result").html('Please enter a valid Phone No.');
				return;
			}
		
			
			
			if(document.getElementById('message').value=='')
			{
				$("#result").html('Please Write Some Message.');
				return;
			}
		
			$.post("contact_us.php",{name:document.getElementById('name').value,email:document.getElementById('email').value,phone:document.getElementById('phone').value,message:document.getElementById('message').value},function(result){
				if(result=='Request Failed')
				{	
					$("#result").html('Message Not Send');
				}
				else
				{
					document.getElementById('name').value='';
					document.getElementById('email').value='';
					document.getElementById('phone').value='';
					document.getElementById('message').value='';
					$("#result").html(result);  
				}
			});
		}

	</script>

    
    <footer class="footer">
        <div class="footer">
            <div class="container">
            
                <div class="row footer-links">
                    <div class="col-lg-12 text-center">
                        <small><a href="terms.php">Terms of Service</a> |</small>
                        <small><a href="privacy.php">Privacy Policy</a> |</small>
                        <small><a href="contact.php">Contact Us</a></small>
                        <!--<small><a href="#">About Us</a></small>-->
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-2">
                        <img src="assets/img/logo-solar.png" alt="logo" class="img-responsive footer-logo">
                    </div>
                    <div class="col-lg-10 disclaimer">
                        <p>
                            The operator of this website does not guarantee that energy savings will result as a use of its service or 
                            any service procured through this website. The operator of this website is not an installer or vendor of solar 
                            energy products, and is not an agent, representative or broker of installers or vendors of solar energy products. 
                            This website does not constitute an offer or solicitation to install or otherwise service solar energy products 
                            and the information submitted by you is not an application for the installation or servicing of solar products. 
                            The information submitted by you will be shared with participating installers. The operator does not guarantee 
                            you will be connected with participating vendors, receive installation or service offers to enter into an 
                            installation agreement. The operator does not endorse, recommend or guarantee the price, product, availability, 
                            rates or fees of participating installers. Participating installers may perform credit checks with credit reporting 
                            bureaus or obtain consumer reports through alternative providers Participating installers may require you to pay a 
                            fee to cover the costs of any such inquiry. Participating vendors may not offer all solar energy products and solar 
                            energy products may not be available in all states. The states serviced by this website may change from time to time, 
                            without notice. The operator is not affiliated with the government and this service is not endorsed or sponsored by 
                            the government or any participating vendor. This service is void where prohibited. This website is not an independent 
                            consumer protection update and the content provided hereon is for informational purposes only. Please see the 
                            <a href="privacy.php">Privacy Policy</a> and <a href="terms.php">Terms of Use </a> for more information. Consult 
                            with your independent legal and financial advisor before acting on any information provided on this website.
                        </p>
                        <p>
                            *Estimated savings based on a projected annual utility rate increase of 3.16% over the life of the system. Actual 
                            savings will vary. Savings depends on several factors, including product type, system production, geography, weather, 
                            shade, electricity usage, full utilization of the 30% solar Investment Tax Credit by the system owner, and utility rate 
                            structures and rate increases.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <p class="copyright">Copyright &copy; 2019 Topsolaroffers.com</p>
                    </div>
                </div>
            </div>
        </div>
        
		<script type="text/javascript">
/* <![CDATA[ */
// var google_conversion_id = 993453260;
// var google_custom_params = window.google_tag_params;
// var google_remarketing_only = true;
/* ]]> */
</script>
<!-- <script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js"> -->
<!-- </script> -->
<!-- <noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/993453260/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript> -->
        
    </footer>


<script type="text/javascript" src="assets/js/jquery-ui-1.11.4.min.js"></script>
<script type="text/javascript" src="assets/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="assets/js/additional-methods.min.js"></script>
<script type="text/javascript" src="assets/js/jquery.maskedinput.min.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/js/smoothscroll.js"></script>
<script type="text/javascript" src="assets/js/msform.js"></script>
<script type="text/javascript" src="assets/js/validate-form.js"></script>
<link href="assets/css/katch.css" rel="stylesheet">

</body>
</html>
