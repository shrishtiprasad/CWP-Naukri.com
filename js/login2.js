

var resdUser = JSON.parse(localStorage.getItem("signup"));
document.querySelector("#form").addEventListener("submit",myForm);
var form = document.querySelector("#form");

// console.log(resdUser);

function myForm(){
    event.preventDefault();

    var Email= form.Email.value;
    var password=form.password.value;
    // console.log(Email,password);

    var flag = false;
    for(i=0;i<resdUser.length;i++){
        if(resdUser[i].email === Email && resdUser[i].password === password){
            flag = true;
            break;
        }
    }
    if(flag === true){
        alert("Login Successful");
        window.location.href="jobsData.html"

    }
    else{
        alert("Invalid Credentials")
    }
}