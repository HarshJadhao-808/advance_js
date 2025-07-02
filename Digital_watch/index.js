let main = document.getElementById("main");

let showtime = document.createElement("h1");


function display() {
	let x = new Date();
	let hour = x.getHours();
	let minutes = x.getMinutes();
	let second = x.getSeconds();

    showtime.innerText = `${hour}:${minutes}:${second}`

    main.append(showtime)
}



setInterval(display,1000)
