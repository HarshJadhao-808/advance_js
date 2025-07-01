let products_arr= JSON.parse(localStorage.getItem("products")) || [];
let form=document.getElementById("form")
let pr_name=document.getElementById("name")
let category=document.getElementById("category")
let image_url=document.getElementById("image_url")
let price=document.getElementById("price")
let gender=document.getElementById("gender")
let sold=document.getElementById("sold")
display()
function display(){
    form.addEventListener("submit",another_one)
}

function another_one(){
    event.preventDefault()    
    function Add(){
        this.name=pr_name.value
        this.category=category.value
        this.image_url=image_url.value
        this.price=price.value
        this.gender=gender.value
        this.sold =sold.value
    }
    
    let products_obj=new Add
    products_arr.push(products_obj)
    console.log(products_obj);
    localStorage.setItem("products",JSON.stringify(products_arr))
    window.location.href="./assignment_2.html"
}