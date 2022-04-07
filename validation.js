var emailRegex = /^\w+([._-]?\w+)*@[a-z]+[-]?[a-z]*\.[a-z]{2,3}/;
//To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; 

function Validation(){
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    if(email == "" && password == ""){
        alert("Nuk keni dhene email-in dhe password-in");
    }
    else if(email == ""){
        alert("Nuke keni dhene email-in");
    }
    else if(password == ""){
        alert("Nuk keni dhene password-in");
    }
    else if(emailRegex.test(email) == false){
        alert("Emaili nuk eshte i dhene valid");
    }
    else if(passwordRegex.test(password) == false){
        alert("Passwordi duhet te kete 8 deri ne 15 karaktere dhe duhet te permbaje te pakten nje shkronje te madhe, nje shkronje te vogel, nje numer, dhe nje karakter special ");
    }
    else{
        alert("Logged in!");
    }
}

    var emriRegex = /^[A-Z][a-z]*/;
    var MbiemriRegex = /^[A-Z][a-z]*/

    function Validation2(){
        var emri = document.querySelector('#emri').value;
        var mbiemri = document.querySelector('#mbiemri').value;
        var email1 = document.querySelector('#email').value;
        var emailkonfirmimi = document.querySelector('#email_k').value;
        var password = document.querySelector('#password').value;
        var passwordkonfirmi = document.querySelector('#password_k').value;
        
        if(emri == "" && mbiemri ==""&& email1 == "" && emailkonfirmimi == "" && password == "" && passwordkonfirmi == "" ){
            alert("Ju lutem plotesoni fushat");
        }        
        else if(emri == ""){
            alert("Ju nuk keni shenuar emrin")
        }
        else if(emriRegex.test(emri) == false){
            alert("Emri dhuet te filloj me shkronje te madhe");
        }
        else if(mbiemri == ""){
            alert("Ju nuk keni shenuar mbiemrin");
        }
        else if(MbiemriRegex.test(mbiemri) == false){
            alert("Mbiemri duhet te filloj me shkronje te madhe");
        }
        else if(email1 == ""){
            alert("Ju nuk keni shkruar emailin");
        }
        else if (emailRegex.test(email1) == false){
            alert("Emaili i dhene nuk eshte valid!");
        }
        else if(emailkonfirmimi == ""){
            alert("Ju duhet te konfirmoni emailin");
        }
        else if(!(email1==emailkonfirmimi)){
            alert("Konfirmimi i emailit nuk eshte valid");
        }
        else if(password ==""){
            alert("Ju nuk keni shkruar passwordin");
        }
        else if(passwordRegex.test(password) == false){
            alert("Passwordi duhet te kete 8 deri ne 15 karaktere dhe duhet te permbaje te pakten nje shkronje te madhe, nje shkronje te vogel, nje numer, dhe nje karakter special");
        }
        else if(passwordkonfirmi == ""){
            alert("Ju duhet te konfirmoni passwordin");
        }
        else if(!(password == passwordkonfirmi)){
            alert("Fjalekalimet nuk jane te njejte");
        }
        else {
            alert("Ju jeni regjistruar me sukses");
        }
    }