// <p class="pargraph"> I'am pargraph</p>
// function to add elmeent
function addPargraphInTheEndWithContent(content){
    let newP = document.createElement("p") // <p></p>
    newP.innerText = content
    let body = document.querySelector("body")
    body.appendChild(newP)
}

function addPargraphAfterId1(content){
    let newP = document.createElement("p") // <p></p>
    newP.innerText = content
    // newP.setAttribute("class" , "paragraph")
    newP.classList.add("paragraph")
    let body = document.querySelector("body")
    body.insertBefore(newP , body.children[2])
}

function addPargraphInTheEnd(){
    let newP = document.createElement("p") // <p></p>
    newP.innerText = "mohammed"
    let body = document.querySelector("body")
    body.appendChild(newP)
}


//make the "add paragrph" button add the content
document.querySelector("#addParagraphButton").addEventListener("click" , function(){
    let valueToAdd= document.querySelector("#WhatToAdd").value
    addPargraphInTheEndWithContent(valueToAdd)
    document.querySelector("#WhatToAdd").value = ""
})

// the "add pargrpah" button makes the body red when the "mouseover"
document.querySelector("#addParagraphButton").addEventListener("mouseover" , function (){
    // document.querySelector("body").style.backgroundColor="red"
    console.log("mouse over Event")
    let body = document.querySelector("body")
    body.style.backgroundColor="red"

})

// the "add pargrpah" button return back the body to white color
document.querySelector("#addParagraphButton").addEventListener("mouseout" , function (){
    // document.querySelector("body").style.backgroundColor="white".
    console.log("mouse out Event")

    // let body = document.querySelector("body")
    // body.style.backgroundColor="white"

    let body = document.querySelector("body")
    body.removeAttribute("style")

})

// make every button with ".clickedBtnGreen" becomes green when we click him
document.querySelectorAll(".clickedBtnGreen").forEach(function(btn){
    btn.addEventListener("click" ,  makeGreen)
})


//  when i click the button "#disableGreenBtn" , the buttons will not be green anymore
document.querySelector("#disableGreenBtn").addEventListener("click" , function (event){

    document.querySelectorAll(".clickedBtnGreen").forEach((elem)=>{
        elem.removeEventListener("click" , makeGreen)
    })
})


function makeGreen(event){
        console.log("event =", event.target)
        event.target.style.backgroundColor="green"
}
