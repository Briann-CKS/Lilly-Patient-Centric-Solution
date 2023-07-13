// require ('dotenv').config();
// const { OpenAI } = require ("langchain/llms/openai");
//import { OpenAI } from '../../dist/llms/openai.js';
// const LILLY_CHAT_API = "https://chat.apps.lrl.lilly.com/ask/cliniclilly"

function sendQuestion() {

  //const model = new OpenAI({
    // azureOpenAIApiKey: "92c5be9400184e13b741b2ce87196b6f",
    // azureOpenAIApiInstanceName: "gpt-35-turbo",
    // azureOpenAIApiDeploymentName: "turbo",
    // azureOpenAIApiVersion: "2023-05-15",
    //temperature: 0.0,
  //});

  // Get the user input from the input field
  const userInput = document.getElementById("userInput").value;
  
  // Perform any necessary actions with the user's query
  // For example, you can display it in the chat container as a user bubble
  const chatContainer = document.querySelector(".chat-container");
  const userBubble = document.createElement("div");
  userBubble.setAttribute("class", "user-bubble bubble");
  userBubble.textContent = userInput;
  chatContainer.appendChild(userBubble);
  // Clear the input field after sending the question
  document.getElementById("userInput").value = "";

  setTimeout(function() {
    send(userInput, chatContainer);
  }, 1000);
}

function send(userInput, chatContainer) {

  const botBubble = document.createElement("div");
  botBubble.setAttribute("class", "bot-bubble bubble left-align typing-effect");
  botBubble.textContent = handleQuestion(userInput);
  chatContainer.appendChild(botBubble);
}

function handleQuestion(input) {

  if (input.includes("clinical study") || input.includes('clinical trial')) {
      return "A clinical study is a research study in which people volunteer to help find answers to specific health questions. Clinical studies are conducted according to a plan, called a protocol, which outlines the types of patients who may enter the study, the schedules of tests and procedures, the drugs involved, the dosages, or amount of the drug, the length of the study, and what the researchers hope to learn from the study."
  }
  else if (input.includes("benefit")) {
      return "The potential benefits of participating in clinical research include the chance to help scientists better understand your disease or condition and to advance treatments and ways to prevent it in the future, feeling like you're playing a more active role in your health, learning more about your disease or condition, and getting information about support groups and resources. In addition, some people participate in clinical trials because they hope to gain access to a potential new treatment for a disease before it is widely available."
  }
  else if (input.includes("risk")) {
      return "Risks to taking part in clinical trials include the following: There may be unpleasant, serious, or even life-threatening effects of experimental treatment; the study may require more time and attention than standard treatment would, including visits to the study site, more blood tests, more procedures, hospital stays, or complex dosage schedules; and there may be discomfort or side effects associated with the experimental treatment."
  }
  else if (input.includes("pay")) {
      return "It depends on the trial. Generally, the sponsor of the trial will cover all or most of the costs associated with the trial. However, you should ask the research team about the specific costs you may be responsible for, such as tests or the study drug. Your health insurance may also cover some of the costs."
  }
  else if (input.includes("incentive")) {
      return "The incentives for patients to participate in clinical trials may vary depending on the individual, but can include the potential to access new treatments or therapies, the opportunity to contribute to medical knowledge, and the potential to benefit from improved health outcomes. Doctors may be incentivized to participate in clinical trials if they are able to access new treatments or therapies for their patients, or if they are able to contribute to medical knowledge and research. Pharmaceutical companies may be incentivized to participate in clinical trials if they are able to gain access to new treatments or therapies, or if they are able to gain data and evidence that can be used to support the safety and effectiveness of new drugs or medical products."
  }
  else {
      return "Sorry, I cannot answer this question."
  }
}

async function sendQueryLillyChat(input, bubble, model) {
  const res = await model.call(input);
  bubble.textContent = res;
  chatContainer.appendChild(bubble);
}

function pressKey(event) {
    if (event.keyCode == 13) {
        sendQuestion()
    }
}

// function typeText(element, text) {
//   let index = 0;
//   const typingSpeed = 100; // Adjust typing speed (in milliseconds) here

//   const typeInterval = setInterval(() => {
//     element.textContent += text[index];
//     index++;

//     if (index >= text.length) {
//       clearInterval(typeInterval);
//       element.parentNode.removeChild(element.previousSibling); // Remove the typing-effect div
//     }
//   }, typingSpeed);
// }