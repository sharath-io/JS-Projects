const datePicker = document.querySelector('#datePicker');
const calBtn = document.querySelector('#cal-btn');
const result = document.querySelector('#result');


function PresentDate(){
    const date = new Date();
    const year = date.getFullYear(); // => 2025
    const month = String(date.getMonth()+1).padStart(2,'0');
    const day = String(date.getDate()).padStart(2,'0');
   return`${year}-${month}-${day}`;
}


calBtn.addEventListener('click', function(){
   const userDOB = datePicker.value;
   const today = PresentDate();

   const [currentYear,currentMonth,currentDay] = today.split("-").map(Number);
   const [birthYear,birthMonth,birthDay] = userDOB.split("-").map(Number);

  let years = currentYear - birthYear;
  let months = currentMonth-birthMonth;
  let days = currentDay - birthDay;

  if(days< 0){
    months -= 1;
    days +=  new Date(currentYear, currentMonth-1,0).getDate();
  }

  if(months<0){
    years = years-1;
    months = months+12;
  }

  result.innerHTML = `Result is :  ${years}  Years, - ${months}  Months, - ${days}  days`
   
});
