
// index.js

function sendQuestion() {
    // Get the user input from the input field
    const userInput = document.getElementById("userInput").value;
  
    // Perform any necessary actions with the user's query
    // For example, you can display it in the chat container as a user bubble
    const chatContainer = document.querySelector(".chat-container");
    const userBubble = document.createElement("div");
    userBubble.setAttribute("class", "user-bubble bubble");
    userBubble.textContent = userInput;
    chatContainer.appendChild(userBubble);

    const botBubble = document.createElement("div");
    botBubble.setAttribute("class", "bot-bubble bubble");
    botBubble.textContent = "I cannot answer your question at the moment.";
    chatContainer.appendChild(botBubble);

    // Clear the input field after sending the question
    document.getElementById("userInput").value = "";
  }
