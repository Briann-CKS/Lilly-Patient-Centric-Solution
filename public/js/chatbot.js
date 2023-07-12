// require ('dotenv').config();
// const { OpenAI } = require ("langchain/llms/openai");s
import { OpenAI } from '../../dist/llms/openai.js';
// const LILLY_CHAT_API = "https://chat.apps.lrl.lilly.com/ask/cliniclilly"

function sendQuestion() {
  // require ('dotenv').config();
  // const { OpenAI } = require ("langchain/llms/openai");

  const model = new OpenAI({
    // azureOpenAIApiKey: "92c5be9400184e13b741b2ce87196b6f",
    // azureOpenAIApiInstanceName: "gpt-35-turbo",
    // azureOpenAIApiDeploymentName: "turbo",
    // azureOpenAIApiVersion: "2023-05-15",
    temperature: 0.0,
  });

  // Get the user input from the input field
  const userInput = document.getElementById("userInput").value;

  if (userInput == "") {
    return
  }
  
  // Perform any necessary actions with the user's query
  // For example, you can display it in the chat container as a user bubble
  const chatContainer = document.querySelector(".chat-container");
  const userBubble = document.createElement("div");
  userBubble.setAttribute("class", "user-bubble bubble");
  userBubble.textContent = userInput;
  chatContainer.appendChild(userBubble);

  const botBubble = document.createElement("div");
  botBubble.setAttribute("class", "bot-bubble bubble");
  // botBubble.textContent = "I cannot answer your question at the moment.";
  // chatContainer.appendChild(botBubble);

  // Clear the input field after sending the question
  document.getElementById("userInput").value = "";

  sendQueryLillyChat(userInput, botBubble, model);
  
  // botBubble.textContent = "I am not smart enough.";
  // chatContainer.appendChild(botBubble);
}

async function sendQueryLillyChat(input, bubble, model) {
  console.log("gabe is smart");
  const res = await model.call(input);
  bubble.textContent = res;
  chatContainer.appendChild(bubble);
}


function pressKey(event) {
    if (event.keyCode == 13) {
        sendQuestion()
    }
}
