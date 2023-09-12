// Example JavaScript code for your frontend interactions

// You can add your JavaScript code here

// Example event listener for a button click
document.getElementById('myButton').addEventListener('click', function () {
    // Your code to handle the button click
    console.log('Button clicked!');
  });

  // Example AJAX request using Fetch API
  fetch('/api/posts', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      // Process the data received from the server
      console.log(data);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error:', error);
    });

  // Add more JavaScript code for your specific application
