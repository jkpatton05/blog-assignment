// TODO: Create a variable that selects the form element
const formElement = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(formElement);
  const formObject = Object.fromEntries(formData);
  if (!formObject.title || !formObject.content) {
    alert('Please fill in all fields');
  } else {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(formObject);
    localStorage.setItem('posts', JSON.stringify(posts));
    redirectPage('blog.html');
  }
});
