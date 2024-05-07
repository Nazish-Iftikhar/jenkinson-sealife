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
  setInterval(updateTicker, 1000);
