let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let pswd = document.getElementById("pswd");
let rpswd = document.getElementById("rpswd");

// success,failure buttons
let success = document.getElementsByClassName("success-icon");
let failure = document.getElementsByClassName("failure-icon");
let error =  document.getElementById("error");
let error1 =  document.getElementById("error1");
let error2 =  document.getElementById("error2");
let error3 =  document.getElementById("error3");
let error4 =  document.getElementById("error4");


function clearerrors(){
    error.innerHTML = "";
    name.style.border = "2px solid green";
    error1.innerHTML = "";
    email.style.border = "2px solid green";
    error2.innerHTML = "";
    phone.style.border = "2px solid green";
    error3.innerHTML = "";
    pswd.style.border = "2px solid green";
    error4.innerHTML = "";
    rpswd.style.border = "2px solid green";
}
function butvalidate(){
    if(name.value=="" && email.value=="" && phone.value=="" && pswd.value=="" && rpswd.value==""){
        remove();
        return true; 
    }
    else{
        return false;
    }
}


function validatesignup(){
    //   clearerrors();
    if(name.value==""){ 
        error.innerHTML = "username cannot be empty";
        error.style.color ="red";
        name.style.border = "2px solid red";
        return false;
      }
    else if(email.value==""){
        error1.innerHTML = "email field cannot be empty";
        error1.style.color ="red";
        email.style.border = "2px solid red";
       return false;  
      }
    else if(phone.value==""){
       error2.innerHTML = "phoneno field cannot be empty";
       error2.style.color ="red";
       phone.style.border = "2px solid red";
       return false;
      }
    else if(pswd.value==""){
      error3.innerHTML = "password field cannot be empty";
      error3.style.color ="red";
      pswd.style.border = "2px solid red";
      return false;
      }  
    else if(rpswd.value==""){
      error4.innerHTML = "re-password field cannot be empty";
      error4.style.color ="red";
      rpswd.style.border = "2px solid red";
      return false;
      }
 else{
      return true;
    }
}
function uservalidation(){
    if(name.value!=""){
        error.innerHTML = "";
        name.style.border = "2px solid green";
        return true;
    }
    else{
        // error.innerHTML = "username cannot be empty";
        //  error.style.color ="red";
        //  name.style.border = "2px solid red";
         return false;
    }
}
function emailvalidate(){
    // clearerrors();
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        error1.innerHTML=""; 
         email.style.border = "2px solid green";
        return true;
    }
    else{
        error1.innerHTML="Invalid emailid";
         error1.style.color = "red";
         email.style.border = "2px solid red";
        return false;   
    }
}

function phonevalidate(){
    //  clearerrors();
    let regphn=/^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let p = phone.value;
if(regphn.test(phone.value)){
    error2.innerHTML=""; 
   phone.style.border = "2px solid green";
    return true;
    }
else if(p.length!=10){
    error2.innerHTML = "phoneno is invalid";
    error2.style.color ="red";
    phone.style.border = "2px solid red";
    return false;
    }
 else{
    error2.innerHTML = "invalid";
    error2.style.color = "red";
    phone.style.border = "2px solid red";
    return false;
 }
}
//  password strength checker
 const indicator = document.querySelector(".indicator");
 const input = document.querySelector("input");
 const weak = document.querySelector(".weak");
 const medium = document.querySelector(".medium");
 const strong = document.querySelector(".strong");
 const test = document.querySelector(".test");
 const hideshowbtn = document.querySelector(".hideshowbtn");

 let regexpweak = /[a-z]/;
 let regexpmed = /\d+/;
 let regexpstr = /.[!,@,#,$,%,^,&,*,(,),_,-,?,~,]/;
 let level = 0;
// let regexpstr = /([a-z])([A-Z])([0-9])([^A-Za-z0-9])({8})/;
// let regexpmed = /(([a-z])([A-Z])([0-9])([^A-Za-z0-9])({6})) || (([a-z])([A-Z])([^A-Za-z0-9])({6}))/;
// let regexpweak = ()()()()();
 function passvalidation() {
     if(pswd.value!=""){
        error3.innerHTML = "";
        pswd.style.border = "2px solid green";

        indicator.style.display = "block";
        indicator.style.display = "flex";
        if(pswd.value.length <=3 && (pswd.value.match(regexpweak) || pswd.value.match(regexpmed) || pswd.value.match(regexpstr))){
            level = 1;
        }
         if(pswd.value.length >=6 && ((pswd.value.match(regexpweak) && pswd.value.match(regexpmed)) || (pswd.value.match(regexpmed) && pswd.value.match(regexpstr)) || (pswd.value.match(regexpweak) && pswd.value.match(regexpstr)))){
            level = 2;
        }
         if(pswd.value.length >=8 && pswd.value.match(regexpweak) && pswd.value.match(regexpmed) && pswd.value.match(regexpstr)){
            level = 3;
        }
        if(level==1){
         weak.classList.add("active");
         test.style.display="block";
         test.textContent="weak";
         test.classList.add("weak");
         
     }
     if(level==2){
       medium.classList.add("active");
        // test.style.display="block";     
         test.textContent="medium";
         test.classList.add("medium");
     }else{
        medium.classList.remove("active");
        test.classList.remove("medium");
    }
    
 if(level==3){
        medium.classList.add("active");
        strong.classList.add("active");
        test.textContent = "strong";
        // test.style.display="block";
        test.classList.add("strong");
        
    }else{
        strong.classList.remove("active");
        test.classList.remove("strong");
    }
    
    // hideshowbtn.style.display = "block";
    // hideshowbtn.onclick = function(){
    //     if (pswd.type == "password") {
    //        pswd.type = "text";
    //        hideshowbtn.textContent = "HIDE";
    //     }
    //     else{
    //       pswd.type = "password";
    //       hideshowbtn.textContent = "SHOW";
    //     }
    //   return true; 
    //  }
    return true;
    } 
 else{
    indicator.style.display = "none";
    test.style.display = "none";
    hideshowbtn.style.display = "none";
    return false;
}
 }
 function rpassvalidation(){
    if(rpswd.value!=""){
           error4.innerHTML = "";
           rpswd.style.border = "2px solid green";
           return false;
 }
 else{
    return true;
 }
}
// password strength checker
// new password strength
// function passvalidation(){
// if(regexpstr.test(pswd.value)){
//    error3.innerHTML = <span style="color:green">strong</span>;
// }
// else if(regexpmed.test(pswd.value)){
//     error3.innerHTML = <span style="color:orange">medium</span>;
// }
// else{
//     error3.innerHTML = <span style="color:red">poor</span>;
// }
// }
// new password strength
function remove(){
    error.innerHTML = "username cannot be empty";
        error.style.color ="red";
        name.style.border = "2px solid red";
       error1.innerHTML = "email field cannot be empty";
        error1.style.color ="red";
        email.style.border = "2px solid red";
        error2.innerHTML = "phoneno field cannot be empty";
       error2.style.color ="red";
       phone.style.border = "2px solid red";
       error3.innerHTML = "password field cannot be empty";
       error3.style.color ="red";
       pswd.style.border = "2px solid red";
       error4.innerHTML = "re-password field cannot be empty";
      error4.style.color ="red";
      rpswd.style.border = "2px solid red";
}