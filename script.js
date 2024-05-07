let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
} 
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
 }, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
if(type === 'next'){
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add('next')
}else{
   let positionLastItem = itemSlider.length - 1;
   listItemDom.prepend(itemSlider[positionLastItem]);
   thumbnailDom.prepend(itemThumbnail[positionLastItem]);
   carouselDom.classList.add('prev');
}
clearTimeout(runTimeOut);
runTimeOut = setTimeout(()=>{
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
},   timeRunning);

clearTimeout(runAutoRun);
runAutoRun = setTimeout(()=>{
   nextDom.click();
}, timeAutoNext);
}




// visitcount javascript
       
const visitCountSpan = document.getElementById('visit-count');
const visitCountIcon = document.getElementById('visit-count-icon');

// Get the current visit count from local storage (if it exists)
let count = localStorage.getItem('visitCount') || 0;

// Increment the count
count++;

// Update the displayed count and store it in local storage
visitCountSpan.textContent = count;
localStorage.setItem('visitCount', count);

// Set title attribute on icon to display visit count
visitCountIcon.title = `Total Visits: ${count}`;








// navbar responsiveness
const hamburger = document.querySelector('.haamburger-btn');
const ul = document.querySelector('.ul-section');

hamburger.addEventListener('click', () => {
  ul.classList.toggle('ham-active');
});


// feedback javascript
function submitFeedback() {
    var rating = document.querySelector('input[name="rating"]:checked');
    var feedback = document.getElementById('feedback').value;
  
    if (rating === null) {
      document.getElementById('response').innerText = "Please select a rating.";
    } else if (feedback === '') {
      document.getElementById('response').innerText = "Please enter your feedback.";
    } else {
      // Perform submission action (e.g., AJAX request)
      document.getElementById('response').innerText = "Feedback submitted successfully!";
      // Reset form
      document.querySelector('input[name="rating"]:checked').checked = false;
      document.getElementById('feedback').value = '';
    }
  }


//   footer javascript
function updateTicker() {
    var date = new Date();
    var dateString = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    var location = "Aptech Learning North Nazimabad II Center"; // Replace with actual location
    var tickerText = location + " - " + dateString;
    document.getElementById('ticker').innerText = tickerText;
  }

  // Initial update
  updateTicker();

  // Update the ticker every second
  setInterval(updateTicker, 6000);
