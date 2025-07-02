let form=document.getElementById("form")
let images=JSON.parse(localStorage.getItem("images")) || []
let url;
display()
function display(){
    url=document.getElementById("url")
    form.addEventListener("submit",addit)
}

function addit(){
    event.preventDefault()
    images.push(url.value)
    localStorage.setItem("images",JSON.stringify(images))
}