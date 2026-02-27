// JavaScript code for interactive activities

// Function to display current date and time
function displayDateTime() {
    const currentDateTime = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
    document.getElementById('datetime').innerHTML = currentDateTime.toLocaleString('en-US', options);
}

// Function to initiate interactive activities
function init() {
    displayDateTime();
    // Add more interactive functionalities here
}

// Call init function when the window loads
window.onload = init;