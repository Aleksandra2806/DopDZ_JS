// // Задание 4

// const out = document.getElementById('out')
// button.onclick = () => {
//     out.innerHTML = +firstFilds.value + +secondFilds.value;
// }

// // Задание 5

// const input = document.querySelectorAll('input[type=text]');
// const clearButton = document.getElementById('clearButton'); 
// clearButton.onclick = () => {
//     for (let i = 0;  i < input.length; i++) {
//     input[i].value = '';
//     }
// }

// // Задание 3
// function numberN() {
//     for (let i = 1; i <= 20; i++) {
//         document.body.insertAdjacentHTML('beforeend','<br>'+ i + '<br>');
//     }
// }

// Задание 2
// const block = document.getElementById('block');
// const fon = document.body
// function changeItem() {
//     block.style.backgroundColor = "black";
//     fon.style.backgroundColor = "grey";
// }
// function rechangeItem() {
//     block.style.backgroundColor = "grey";
//     fon.style.backgroundColor = "black";
// }

// // Задание 6

// const chek = document.getElementById('chek')
// const best = document.getElementById('best')
// function chekBest () {
//     if (chek.checked) {
//         best.style.color = "red";
//     } else {
//         best.style.color = "green";
//     }
// }
// chek.addEventListener("click", chekBest)

const canvas = document.getElementById('canvas');
	var obCanvas = canvas.getContext('2d');
	
	obCanvas.beginPath();
	obCanvas.arc(150, 75, 50, 0, 2*Math.PI, false);
	obCanvas.fillStyle = 'red';
	obCanvas.fill();
	obCanvas.lineWidth = 1;
	obCanvas.strokeStyle = 'red';
	obCanvas.stroke();

