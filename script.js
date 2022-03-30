function validation(){

    var fname= document.getElementById("fname").value;
    var  lname= document.getElementById("lname").value;
    var mobile= document.getElementById("mobile").value;
    var password= document.getElementById("password").value;
    var cpassword= document.getElementById("cpassword").value;
    var email= document.getElementById("email").value;
    

    var letters = /^[a-zA-Z]+$/;
    var numbers = /^[0-9]+$/;
    var pwd= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var mail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    
    if(fname=='')
      {alert('enter First name');
    }
    else if(!letters.test(fname))
      { alert('first name should only be letters');
     }
     else if(lname=='')
      { alert('enter last name');
      }
    else if(!letters.test(lname))  
    { alert('last name should only be letters');
    }
    else if(mobile=='')
    { alert('enter mobile number');

    }
    else if(!numbers.test(mobile))
     { alert('mobile number should be numbers');

     }
     else if( document.getElementById("mobile").value.length!=10)
     { alert('mobile should be 10 digits');

     }
     else if(email=='' )
    { alert('Enter email id');
    }
    else if(!mail.test(email))
     {
         alert('Invalid email');
     }
     else if(password=='')
		{
			alert('Please enter Password');
		}
    else if(cpassword=='')
		{
			alert('Please Confirm the Password');
		}
    else if(!pwd.test(password))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
    else if(password != cpassword)
    {
      alert('Password not matched');    
    } 
 
    else if(password.length < 6)
		{
			alert ('Password minimum length is 6');
		}
	else if(password.length > 12)
		{
			alert ('Password max length is 12');
		}
    else
		{				                            
               alert('Thank You for Login ');
			   
		}
	}    
		   
		
		
   
    

