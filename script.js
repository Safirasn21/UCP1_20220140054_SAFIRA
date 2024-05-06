function showAlert() {
    alert("Hello! This website is made by myself to share the things I like. Hope y'all enjoy this lil project about myself.");
}

function updateGreetingAndTime() {
    var now = new Date();
    var hours = now.getHours();
    var greeting = "Good ";
    if (hours < 12) {
        greeting += "Morning";
    } else if (hours < 18) {
        greeting += "Afternoon";
    } else {
        greeting += "Evening";
    }
    
    var timeString = now.toLocaleTimeString();
    
    document.getElementById('greeting').textContent = greeting + ", ";
    document.getElementById('current-time').textContent = timeString;
}

setInterval(updateGreetingAndTime, 1000);






