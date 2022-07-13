let username;
let password;

function login() {
    username =document.getElementById("username").value;
    password =documenmt.getElementById("password").value;

    if ((username=="Pratiksha") && (password=="123")){
        alert("Login suucess");
    }    

    else{
        alert("login failed");
    }
}