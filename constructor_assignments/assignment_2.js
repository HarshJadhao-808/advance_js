let main=document.getElementById("main")
let products_arr=JSON.parse(localStorage.getItem("products"))
let counter;
let no_products = document.createElement("h1");
let counter_div = document.getElementById("counter_div");
display()
function display(){
    for (let i=0;i<products_arr.length;i++){
        counter=products_arr.length;
        no_products.innerText=counter
        counter_div.append(no_products)
        let div=document.createElement("div")
        let name=document.createElement("h2")
        name.innerText = products_arr[i].name
        let category=document.createElement("h3")
        category.innerText=products_arr[i].category
        let image=document.createElement("img") 
        image.src=products_arr[i].image_url
        let remove=document.createElement("button")
        remove.innerText="Remove"
        remove.addEventListener("click",function(){
            remove_it(products_arr[i])
        })
        remove.setAttribute("class","button")
        let sold=document.createElement("button")
        sold.innerText="sold"
        sold.setAttribute("class","button")
        div.append(name,image,category,remove,sold)
        main.append(div)
    }
}

function remove_it(el){
    products_arr.splice(el,1)
    localStorage.setItem("products",JSON.stringify(products_arr))
    counter=products_arr.length;
    window.location.reload();
}