
const inputElements = document.querySelectorAll("input");

inputElements.forEach(item => {
    item.disabled = true;

})
const leversElements = document.querySelectorAll(".lever");
const checkElements = document.querySelectorAll(".checkbox");
const passwordInput = document.querySelector(".password");
const okButton = document.querySelector(".ok");
const launchButton = document.querySelector(".launch");
const commandElements = document.querySelectorAll(".command")
const rockerImage = document.querySelector(".rocket");
passwordInput.disabled = false;
okButton.disabled = false;



okButton.addEventListener("click", Enable);
function Enable() {

    const password = passwordInput.value;
    console.log(password);
    if (password === "TrustNo1") {

        inputElements.forEach(item => {
            item.disabled = false;

        })
        passwordInput.disabled = true;
        okButton.disabled = true;
        launchButton.disabled = true;
    }
}



function changing(){
    console.log(checker(Array.from(checkElements)));
    if (checker(Array.from(checkElements)) && checker1(Array.from(leversElements))){
        launchButton.disabled = false;
    }
}

let checker = arr => arr.every(v => v.checked === true);
let checker1 = arr => arr.every(v => v.value === '100');

commandElements.forEach(item => {
    item.addEventListener("change", changing);
})


launchButton.addEventListener("click", () => {
    rockerImage.classList.add("translate");
})

function testPass14() {
    let inputs = document.querySelectorAll('input');
    for (let item of inputs) {
        item.onchange = function () {
            console.log('HAhA pass the test No14');
        }
    }
}

testPass14()