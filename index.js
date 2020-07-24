// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;



 const callForEvery3secs = waitTime =>  {
   setTimeout(() => {
      console.log('I am getting called');
      callForEvery3secs(3000);
   }, waitTime)
};


callForEvery3secs();

