let uname = document.getElementById("uname");
let pwd = document.getElementById("pwd");
let errm = document.getElementById("errm");
let errm1 = document.getElementById("errm1");
function clearerror(){
    errm.innerHTML="";
    uname.style.border="2px solid green"; 
    errm1.innerHTML="";
    pwd.style.border="2px solid green"; 
}  
function validate(){
    clearerror();
    if(uname.value=="" && pwd.value==""){
         uname.style.border="2px solid red";
         errm.innerHTML="username cannot be empty";
         errm.style.color="red";
         pwd.style.border="2px solid red";
         errm1.innerHTML="password cannot be empty";
         errm1.style.color="red";
         return false;
    }
     else if(pwd.value==""){
         pwd.style.border="2px solid red";
         errm1.innerHTML="password cannot be empty";
         errm1.style.color="red";
        return false;
    }
    // else if(pwd.value.length<=5){
    //     pwd.style.border="2px solid red";
    //      errm1.innerHTML="password is too short";
    //      errm1.style.color="red";
    //     return false;
    // }
    else{
        return true;
    }
}
