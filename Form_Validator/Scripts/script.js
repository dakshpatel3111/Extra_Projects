function checkScript() {
    var isOk = true;
   var pwd = document.getElementById("pswd").value.length;
   var pwd2 = document.getElementById("pswd").value;
   
    if(pwd >1)
    {
        var points = document.getElementById("strength").value = 1;
        
       if(pwd>2)
       {
        var points = document.getElementById("strength").value = 2;
        
          if(pwd >3)
         {
        var points = document.getElementById("strength").value = 3;
              
              if(pwd >4)
              {
        var points = document.getElementById("strength").value = 4;
                  if(pwd2.match(/[@#$%&]/)){
                       var points = document.getElementById("strength").value = 5;
                  }
                  isOk = true;
                 
                  
        }
        }
       }        
    }
    
    else {
        var points = document.getElementById("strength").value = 0;
    }
}


function check()

{

  var isOk = true;

 

  var username=document.getElementById('uname').value;

  var password=document.getElementById('pswd').value;

  var repassword=document.getElementById('pswdr').value;

  var email=document.getElementById('email').value;

  var no=document.getElementById('number').value;

  if(username=="")

  {

      user.innerHTML="&#10060 This Field is Required with 5 char (min)";

      user.style.color="red";

      isOk=false;

  }

  

  if(repassword=="")

  {

    repass.innerHTML="&#10060 This Field is Required";

    repass.style.color="red";

    isOk=false;

  }

  if(email=="")

  {

    mail.innerHTML="&#10060 This Field is Required";

    mail.style.color="red";

    isOk=false;

  }

  if(no=="")

  {

    num.innerHTML="&#10060 This Field is Required";

    num.style.color="red";

    isOk=false;

  }


  else

  {

    isOk=true;

  }

  return isOk;

 

}

    function checkusername()
{
    var username=document.getElementById('uname').value;
        if(username.length>5){
        user.innerHTML="&#10003 Username Approved";
        user.style.color="green";
       
    }
    if(username.length<5){
        user.innerHTML="";
    }
    }

function checkemail(){
     var emailid=document.getElementById('email').value;
    if(emailid.length>5){
        mail.innerHTML=" &#10003 Email Id Accepted";
        mail.style.color="green";
        
    }
    if(emailid.length<4){
        mail.innerHTML="";
    }
}
function checkPassword(){
    var password=document.getElementById('pswd').value;

  var repassword=document.getElementById('pswdr').value;
    var barpoint = document.getElementById('strength').value;
     
    if(password==repassword && barpoint==5){
        repass.innerHTML=" &#10003 Password Matched";
        repass.style.color="green";
    }
    else{
        repass.innerHTML="&#10060 Password Unavailable";
    }
}
function Number(){
    var no=document.getElementById('number').value;
    
    if(no.length>9){
      num.innerHTML="&#10003 Contact Number Approved";
        num.style.color="green";
        
    }
    else{
        num.innerHTML="&#10060 Contact Number must be 10 digits";
        num.style.color="red";
    }
}
 

