// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// Get the toggle button element
const toggleButton = document.querySelector('.toggle-button');

// Get the circle element
const circle = document.querySelector('.circle');

// Check if the mode is already saved in local storage
const savedMode = localStorage.getItem('mode');

// If the mode is saved, apply it to the page and circle
if (savedMode) {
    applyMode(savedMode);
}

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the mode between light and dark
    const mode = toggleMode();

    // Apply the mode to the page and circle
    applyMode(mode);

    // Save the mode to local storage
    saveMode(mode);
});

// Function to toggle the mode between light and dark
function toggleMode() {
    // Check the current mode
    const currentMode = document.documentElement.getAttribute('data-mode');

    // Toggle the mode
    const mode = currentMode === 'light' ? 'dark' : 'light';

    // Return the updated mode
    return mode;
}

// Function to apply the mode to the page and circle
function applyMode(mode) {
    // Update the data-mode attribute of the root element
    document.documentElement.setAttribute('data-mode', mode);

    // Update the circle class based on the mode
    circle.className = `circle ${mode}`;
}

// Function to save the mode to local storage
function saveMode(mode) {
    localStorage.setItem('mode', mode);
}

// Function to read the mode from local storage
function readMode() {
    return localStorage.getItem('mode');
}

// TODO: Create functions to read and write from local storage

function writeToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}
