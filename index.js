function sendQuestion() {
    var userInput = document.querySelector('.user-input');
    var chatContainer = document.querySelector('.chat-container');

    var userBubble = document.createElement('div');
    userBubble.className = 'user-bubble';
    userBubble.textContent = userInput.value;
    chatContainer.appendChild(userBubble);

    userInput.value = '';

    var botBubble = document.createElement('div');
    botBubble.className = 'bot-bubble';
    botBubble.textContent = 'Sorry, I am just a demo chatbot. I cannot answer questions.';
    chatContainer.appendChild(botBubble);
}