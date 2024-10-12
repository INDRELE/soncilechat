const messagesDiv = document.getElementById('messages');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Function to send a message
function sendMessage() {
    const username = usernameInput.value || 'Anonymous';
    const message = messageInput.value.trim();

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<span>${username}:</span> ${message}`;
        messagesDiv.appendChild(messageElement);
        messageInput.value = '';

        // Scroll to the latest message
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}

// Add event listeners
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault(); // Prevent form submission if wrapped in a form
    }
});
