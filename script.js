
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
}


// load card
const  loadCard=()=>{
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
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
    newdiv.className = "w-full h-full  p-5 space-y-4  rounded-lg overflow-hidden ";
    newdiv.innerHTML=`
       <div class="w-[300px] shadow-lg p-5 space-y-4 id="child-container">
            <!-- prioty -->
            <div class="flex justify-between items-center  ">
            <div>
                <img src="./B13-A5-Github-Issue-Tracker/assets/Open-Status.png" alt="">
            </div>
            <div>
                <p class="bg-blue-400 px-4 py-1 rounded-md">${card.priority}</p>
            </div>
        </div>
        <div>
            <h1 class="text-xl font-bold">${card.title}</h1>
            <p class="line-clamp-2 text-gray-400">${card.description}</p>
        </div>
        <!-- level -->
         <div class="flex gap-2 ">
            <!-- bug  -->
            <div class="flex items-center gap-1 bg-red-200 px-3 rounded-md ">
                <div>
                    <img class="w-3" src="./B13-A5-Github-Issue-Tracker/assets/Vector.png" alt="">
                </div>
                <div>
                    <p class="  text-red-500 font-semibold">${card.labels[0]}</p>
                </div>
            </div>
            <!-- help -->
            <div class="flex items-center gap-1  bg-yellow-100 px-3 py-1 rounded-md ">
                <div>
                    <img class="w-4" src="./B13-A5-Github-Issue-Tracker/assets/Vector (1).png" alt="">
                </div>
                <div>
                    <p class="text-yellow-600 font-semibold ">${card.labels[1]}</p>
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
