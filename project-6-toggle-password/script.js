const display = document.querySelector("#display");
const inputEl = document.querySelector("input")

display.addEventListener("click", function(){
    if(display.innerHTML === 'Show'){
        display.innerHTML = 'Hide';
        inputEl.type = 'text'
    }
   else {
    display.innerHTML = 'Show';
     inputEl.type = 'password'
   }
})

