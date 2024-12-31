const bodyEl = document.querySelector('body');
const spanEls = document.querySelectorAll('span');

spanEls.forEach(function(spanEl){
    spanEl.addEventListener('click', function(e){
        bodyEl.style.backgroundColor = e.target.id
    })
})

// const redEl = document.querySelector('#red');
// const greenEl = document.querySelector('#green');
// const blueEl = document.querySelector('#blue');

// function clickFn(colorArg){
//     bodyEl.style.backgroundColor= colorArg;
// }

// redEl.addEventListener('click', ()=> clickFn('red'));
// greenEl.addEventListener('click', ()=> clickFn('green'));
// blueEl.addEventListener('click', ()=> clickFn('blue'));

