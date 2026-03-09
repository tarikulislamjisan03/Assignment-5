
let allIsues=[]

const dynamicbtn=(btnid)=>{
    console.log("clicked")
    const button=document.querySelectorAll(".button")
    
    
    for (const btn of button) {
      
        btn.classList.remove("active")
    }
    const btnId=document.getElementById(btnid)
    btnId.classList.add("active")
    

    if(btnid==="all"){
        displayCard(allIsues)
    }
    else{
       const filtered=allIsues.filter(card=>btnid===card.status)
       displayCard(filtered)
    }
    spinner.classList.add("hidden")
}


// load card
const  loadCard=()=>{
    const spinner=document.getElementById("spinner")
    console.log(spinner)
    spinner.classList.remove("hidden")
    spinner.classList.add("flex")
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res=>res.json())
   
    .then(data=>{
         spinner.classList.add("hidden")
        allIsues=data.data
        displayCard(allIsues)
    })
}
loadCard()



// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"

const displayCard=(cards)=>{
    const issuesCount=document.getElementById("issues-count")
    issuesCount.innerText=`${cards.length}`
    const cardContainer=document.getElementById("card-container")
    cardContainer.innerHTML=""
   for (const card of cards) {
    console.log(card)
    const newdiv=document.createElement("div")
    newdiv.className = "flex flex-col w-full h-full p-5 space-y-4 rounded-lg overflow-hidden border border-gray-200 shadow-sm";
    newdiv.innerHTML=`
       <div onclick="openModal(${card.id})" class="w-full shadow-lg p-5 space-y-4 h-full id="child-container">
            <!-- prioty -->
            <div class="flex justify-between items-center  ">
            <div>
                <img src="${card.status === 'open' ? './B13-A5-Github-Issue-Tracker/assets/Open-Status.png' : './B13-A5-Github-Issue-Tracker/assets/Closed- Status .png'}" alt="closed">
            </div>
            <div >
                <p class="px-4 py-1 rounded-md ${card.priority === 'high' ? 'bg-red-200 text-red-600' : card.priority === 'medium' ? 'bg-yellow-200 text-yellow-600' : 'bg-gray-200 text-gray-600'}">
                ${card.priority}
                </p>
            </div>
        </div>
        <div>
            <h1 class="text-xl font-bold">${card.title}</h1>
            <p class="line-clamp-2 text-gray-400">${card.description}</p>
        </div>
        <!-- level -->
         <div class="flex gap-2 justify-center">
            <!-- bug  -->
            <div class="flex items-center gap-1 bg-red-200 px-3 rounded-md h-10 ">
                <div>
                    <img class="w-3" src="./B13-A5-Github-Issue-Tracker/assets/Vector.png" alt="">
                </div>
                <div>
                    <p class="  text-red-500 text-sm font-semibold">${card.labels[0] || "Not Found"}</p>
                </div>
            </div>
            <!-- help -->
            <div class="flex items-center gap-1  bg-yellow-100 px-3 py-1 h-10 rounded-md ">
                <div>
                    <img class="w-4" src="./B13-A5-Github-Issue-Tracker/assets/Vector (1).png" alt="">
                </div>
                <div>
                    <p class="text-yellow-600 text-sm font-semibold ">${card.labels[1] || "Not Found"}</p>
                </div>
            </div>
         </div>
         <hr>
         <div>
            <p class="text-gray-400">#${card.id} by ${card.author}</p>
            <p class="text-gray-400">${card.createdAt}</p>
         </div>
        </div>
    
    `
    cardContainer.appendChild(newdiv)
   
    if(card.status==="open"){
        newdiv.classList.add("green")
    }
    else{
        newdiv.classList.add("purple")
    }
    
    

   }
}

// search 
const search=()=>{
    const searchContainer=document.getElementById("search").value
    console.log(searchContainer)
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchContainer}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCard(data.data))
}



const openModal=(id)=>{
const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
fetch(url)
.then(res=>res.json())
.then(data=>{
    const card=data.data
    console.log(card)
    // priority
    const modalPriority=document.getElementById("modal-priority")
    modalPriority.innerText=card.priority
modalPriority.className=`rounded-md px-4 py-1 ${card.priority==="high"?'bg-red-300 text-red-600':card.priority==="medium" ? 'bg-yellow-300 text-yellow-600' : 'bg-gray-300 text-gray-600'}`
// status img
const statusimg=document.getElementById("modal-status-img")
statusimg.src=`${card.status==="open" ? './B13-A5-Github-Issue-Tracker/assets/Open-Status.png' : './B13-A5-Github-Issue-Tracker/assets/Closed- Status.png' }`
    // title
    document.getElementById("modal-title").innerText=card.title
    // description
    document.getElementById("modal-description").innerText=card.description
   
    // author and date
    document.getElementById("modal-author").innerText=card.author
    document.getElementById("modal-created").innerText=card.createdAt
    // labels
    document.getElementById("modal-label1").innerText=`${card.labels[0] ? card.labels[0] : "Not Found"}`
    document.getElementById("modal-label2").innerText=`${card.labels[1] ? card.labels[1] : "Not Found"}`


     document.getElementById("mymodal").showModal()
})

}



