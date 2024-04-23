let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

function updateClock() {
      var now = new Date();
      var day = now.toLocaleDateString('en-US', { weekday: 'long' });
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();

    
      var myString = formatTime(hour) + ':';
      var myString2 = formatTime(minute) + ':';
      var myString3 = formatTime(second);


      
      document.getElementById('myTime').innerText = myString;
      document.getElementById('myMin').innerHTML = myString2;
      document.getElementById('mySec').innerHTML = myString3;
    }

    function formatTime(time) {
      return (time < 10 ? '0' : '') + time;
    }

    setInterval(updateClock, 1000);
    updateClock();


    //for date
    function getNumberOfDays(startDate, endDate) {
  // Convert both dates to milliseconds
  var start = startDate.getTime();
  var end = endDate.getTime();

  // Calculate the difference in milliseconds
  var difference = end - start;

  // Convert the difference to days
  var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

// Example usage:
var startDate = new Date('2024-04-10');
var endDate = new Date('2024-04-30');
var numberOfDays = getNumberOfDays(startDate, endDate);

document.getElementById('daysOfThe').innerHTML = numberOfDays + ':';
// console.log(numberOfDays);

const currentYear = new Date().getFullYear();

document.getElementById('currentYear').textContent = currentYear;