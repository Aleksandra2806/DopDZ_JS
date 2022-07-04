// Задание 6

const chek = document.getElementById('chek')
const best = document.getElementById('best')
function chekBest () {
    if (chek.checked) {
        best.style.color = "red";
    } else {
        best.style.color = "green";
    }
}
chek.addEventListener("click", chekBest)