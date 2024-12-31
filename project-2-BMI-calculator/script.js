const formEl = document.querySelector('form');


formEl.addEventListener('submit', function(e){
e.preventDefault();

    const heightEl = parseInt(document.querySelector('#height').value)
    const weightEl = parseInt(document.querySelector('#weight').value)
    const resultEl = document.querySelector('#result');

    if(heightEl==='' || heightEl<0 || isNaN(heightEl))
        resultEl.innerHTML = `Enter valid height ${heightEl}`;
    else if(weightEl==='' || weightEl<0 || isNaN(weightEl))
        resultEl.innerHTML = `Enter valid weight ${weightEl}`;
    else {
        const bmi = (weightEl / ((heightEl * heightEl)/10000)).toFixed(2)
        resultEl.innerHTML = `<span>${bmi}</span>`
    }

})