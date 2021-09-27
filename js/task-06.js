let inputRef = document.querySelector('#validation-input');
  

inputRef.addEventListener('input', inputChange)
function inputChange(el) {

  if (el.currentTarget.getAttribute("data-length") == el.currentTarget.value.length
  ) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');   
  }
};