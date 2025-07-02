
let main=document.getElementById("main")
let slide = document.createElement("img");
slide.setAttribute("id","slide")
let count=0;
let images=JSON.parse(localStorage.getItem("images"))
setInterval(slideit,2000);

function slideit(){
    slide.src=images[count]
    if(count==slide.length-1){
        count=0
    }else{
        count++
    }
    main.append(slide)
}
