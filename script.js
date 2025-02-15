let increaseBtn = document.getElementsByClassName("increaseBtn")[0];
let decreaseBtn = document.getElementsByClassName("decreaseBtn")[0];
let resetBtn = document.getElementsByClassName("resetBtn")[0];

const countLabel = document.getElementById("myCounter");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}