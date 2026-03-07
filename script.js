console.log("done")
const dynamicbtn=(btnid)=>{
    console.log("clicked")
    const button=document.querySelectorAll(".button")
    
    
    for (const btn of button) {
      
        btn.classList.remove("active")
    }
    const btnId=document.getElementById(btnid)
    btnId.classList.add("active")
}