// TODO: Create a variable that selects the main element
const mainElement = document.querySelector('main');

// TODO: Create a function that builds an element and appends it to the DOM
function appendElement(tag, parent, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.appendChild(element);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    const message = 'No blog posts to display';
    appendElement('p', mainElement, message);
}

// TODO: Create a function that reads from local storage and returns the data
function getPosts() {
    return JSON.parse(localStorage.getItem('posts'));
}

// TODO: Call the function to render the list of blog posts
const posts = getPosts();
