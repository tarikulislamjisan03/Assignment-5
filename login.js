
const login=()=>{


const usernameContainer=document.getElementById("username-container").value
const passContainer=document.getElementById("pass-container").value
event.preventDefault()
if(usernameContainer==="admin" && passContainer==="admin123"){
    alert("Login")
    window.location.href="home.html"
}
else{
    alert("Invalid username or password")
}

}
