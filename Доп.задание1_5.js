// Задание 5

const input = document.querySelectorAll('.clearInput');
const clearButton = document.getElementById('clearButton'); 
clearButton.onclick = () => {
    for (let i = 0;  i < input.length; i++) {
    input[i].value = '';
    }
}