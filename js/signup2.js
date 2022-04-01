

var form = document.querySelector("#form").addEventListener("submit",myForm);
var signupArr = JSON.parse(localStorage.getItem("signup")) || [];
// console.log(signupArr)
function myForm(){
    event.preventDefault();
    var Name = document.querySelector("#name").value;
    var Number = document.querySelector("#number").value;
    var Email = document.querySelector("#Email").value;
    var Password = document.querySelector("#password").value;

    var signupObj = {
     name:Name,
     number:Number,
     email:Email,
     password:Password,
    };


    // if(name="" || number=="" || email=="" || password==""){
    //     alert("Please fill all the fields");
    // }
    // else{
        signupArr.push(signupObj);
    // console.log(signupArr);

    localStorage.setItem("signup",JSON.stringify(signupArr));

    // document.querySelector("input[type='submit']").addEventListener("click",function(){
    //     window.location.href="login2.html";
    // })

    localStorage.setItem("input[type='submit']", JSON.stringify(signupArr));
    alert("Registration Successful");
    window.location.href="login2.html";
    // }
    

    



}
