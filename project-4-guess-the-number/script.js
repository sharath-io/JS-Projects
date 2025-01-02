const inputEl = document.querySelector('input');
const btnEl = document.querySelector('button');
const chanceEl = document.querySelector('.chance');
const responseEl = document.querySelector('#response');
const guessSlot = document.querySelector('.guessSlot'); 
let arr = [];
let chances = 10;

const generateRandom =(min,max) => parseInt(Math.random()* (max-min+1))+min

btnEl.addEventListener('click', function(e){
    if(parseInt(inputEl.value)>=1 && parseInt(inputEl.value)>=1){
        const random = generateRandom(1,10);
        if(random === parseInt(inputEl.value))
            responseEl.innerHTML =`<span style="color:green">Matched : random(${random} - Input(${parseInt(inputEl.value)}))</span>`;
        else{
            responseEl.innerHTML =`<span style="color:red">not matched</span>`;
            guessSlot.innerHTML += `${parseInt(inputEl.value)}` 
        }
        chances = chances-1;
        chanceEl.innerHTML = chances;
        if(chances === 0){
            btnEl.style.cursor='not-allowed'
            btnEl.disabled = true
        }
    }
    else
    responseEl.innerHTML = `<span style="color:red">enter valid input</span>`
})






























// function generateRandomNumber(min,max){
//     return parseInt(Math.random()*( max - min + 1 ))+min;
// }


// const inputEl = document.querySelector('input');
// const btnEl = document.querySelector('button');


// btnEl.addEventListener('click', function(){
//       const random = generateRandomNumber(1,9);
//       console.log('radnom number generated is ', random, inputEl.value)
//       if(random === parseInt(inputEl.value))
//         console.log('Your guess is right')
// })