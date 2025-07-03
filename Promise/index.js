let upi_pin = document.getElementById("upi_pin");
let img=document.querySelector("img")
let submit = document.getElementById("submit");
let pin_box = document.getElementById("pin_box");
submit.addEventListener("click", function(){
    
    let check = new Promise(function (res, rej) {
        if (upi_pin.value == 123321) {
            res("successful");
        } else {
            rej("unsuccessfull");
        }
    });
    
    check.then(function (res) {
        img.src = "../Promise/images/success-tick.gif";
        pin_box.style.display="none"
    });
    
    check.catch(function (rej) {
        img.src = "../Promise/images/failed.webp";
        pin_box.style.display="none"
    });

});
