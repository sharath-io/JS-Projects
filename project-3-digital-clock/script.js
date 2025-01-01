const clock = document.querySelector('#clock');
const btn = document.querySelector('#display')

function displayTime(){
    setInterval(function(){
        const date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
    }, 1000)
}

btn.addEventListener('click', displayTime)