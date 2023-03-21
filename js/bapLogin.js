document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// login 

document.getElementById("login_father_button").addEventListener('click',()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);

    if(email==="imran" && password == 123){
        window.location.href = "../bank.html";
    }else{
        alert("Sheet Do You Man No Access Just Fun")
    }
})

