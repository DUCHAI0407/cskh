const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;

    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user');
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;

    messageInput.value = '';

    setTimeout(() => {
        botReply();
    }, 500);
}

function botReply() {
    const reply = document.createElement('div');
    reply.classList.add('message');
    reply.textContent = "Xin chào! Tôi là bot 🤖";

    chatBox.appendChild(reply);

    chatBox.scrollTop = chatBox.scrollHeight;
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
