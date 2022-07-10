//  Задание 1

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = document.documentElement.clientHeight /2;
const height = canvas.height = document.documentElement.clientHeight /2;
ctx.arc(170, 160, 110, 0, getRadians(360));
ctx.stroke();
function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}


