document.addEventListener('DOMContentLoaded', function() {
  var sendButton = document.getElementById('sendButton');
  sendButton.addEventListener('click', function() {
    fetch('/api/send-message', {
      method: 'POST',
    })
      .then(function(response) {
        if (response.ok) {
          alert('Message sent to Microsoft Teams!');
        } else {
          alert('Failed to send the message.');
        }
      })
      .catch(function(error) {
        alert('An error occurred while sending the message: ' + error);
      });
  });
});
