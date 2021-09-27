let input = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

input.addEventListener('input', currentInput)
function currentInput() {
    if (input.value === '') {
       nameOutput.innerHTML = 'незнакомец';
    } else{
    nameOutput.innerHTML = input.value;
    }
}