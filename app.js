// <p class="pargraph"> I'am pargraph</p>
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


document.querySelector("#addParagraphButton").addEventListener("click" , function(){
    let valueToAdd= document.querySelector("#WhatToAdd").value
    addPargraphInTheEndWithContent(valueToAdd)
    document.querySelector("#WhatToAdd").value = ""

})
