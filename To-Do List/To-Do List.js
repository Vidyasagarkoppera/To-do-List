const sum = document.getElementById("card")
const type  = document.getElementById("class")
const arr =document.getElementById("todo")
sum.addEventListener("submit",(x)=>{
    x.preventDefault()
    toDolist()
})

function toDolist(){
    let add=type.value;
    const liel=document.createElement("li");
    liel.innerText=add;
    arr.appendChild(liel)
    type.value=""
    const checkBtn=document.createElement("div");
    checkBtn.innerHTML=`<i class="fa-regular fa-square-check"></i>`
    liel.appendChild(checkBtn)
    const dltBtn=document.createElement("div");
    dltBtn.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
    liel.appendChild(dltBtn)

    checkBtn.addEventListener("click",()=>{
        liel.classList.toggle("check")
    })
    dltBtn.addEventListener("click",()=>{
        liel.remove()
    })
}


