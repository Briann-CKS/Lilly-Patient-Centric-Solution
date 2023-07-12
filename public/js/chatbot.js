require('dotenv').config();
// const { spawn } = require('child_process');
// const { OpenAI } = require ("langchain/llms/openai");

const LILLY_CHAT_API = "https://chat.apps.lrl.lilly.com/ask/cliniclilly"

function sendQuestion() {

  const model = new OpenAI({
    // azureOpenAIApiKey: "92c5be9400184e13b741b2ce87196b6f",
    // azureOpenAIApiInstanceName: "gpt-35-turbo",
    // azureOpenAIApiDeploymentName: "turbo",
    // azureOpenAIApiVersion: "2023-05-15",
    temperature: 0.0,
  });
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
    // botBubble.textContent = "I cannot answer your question at the moment.";
    // chatContainer.appendChild(botBubble);

    // Clear the input field after sending the question
    document.getElementById("userInput").value = "";

    // // Create a new URLSearchParams object
    // const params = new URLSearchParams();

    // // Add the user input as a parameter
    // params.append("query", userInput);

    // // Get the query string
    // const queryString = params.toString();

    // // Create the API endpoint URL with the query string
    // const apiUrl = "https://chat.apps.lrl.lilly.com/ask/cliniclilly?q=What is a clinical trial" + queryString;

    // // Use the apiUrl in your API request
    // // ...
    // // Access the query parameters using the searchParams property
    // const url = new URL("https://chat.apps.lrl.lilly.com/ask/cliniclilly?q=What is a clinical trial");
    // const paramsFromUrl = url.searchParams;

    // // Get the value of a specific parameter
    // const param1Value = paramsFromUrl.get("param1");
    // console.log(param1Value); // Output: "value1"

    console.log("gabe is smart");
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

// function sendQueryLillyChat(input) {
//     const query = { q: input };
//     const params = new URLSearchParams(query).toString();;
//     // const url = `${LILLY_CHAT_API}?${params}`;
//     const url = "https://chat.apps.lrl.lilly.com/ask/cliniclilly?q=What%20is%20a%20clinical%20trial";

//     // fetch(url)
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     // Handle the response data
//     //     alert(data);
//     //   })
//     //   .catch(error => {
//     //     // Handle any errors
//     //     // alert(response.status);
//     //     alert(error);
//     //   });

//     // Execute Python script
//     // const sensor = spawn('python3', ['./python/chatbot.py']);

//     // // const temperatures = []; // Store readings

//     // ls.stdout.on('data', (data) => {
//     //   alert (`stdout: ${data}`);
//     // });
    
//     // ls.stderr.on('data', (data) => {
//     //   console.error(`stderr: ${data}`);
//     // });
    
//     // ls.on('close', (code) => {
//     //   alert(`child process exited with code ${code}`);
//     // });

//     // // // Send data to the script (API endpoint URL, request data, etc.)
//     // // const requestData = {
//     // //   url: 'https://chat.apps.lrl.lilly.com/ask/cliniclilly?q=What%20is%20a%20clinical%20trial',
//     // //   method: 'GET',
//     // // };
//     // // pythonProcess.stdin.write(JSON.stringify(requestData));
//     // // pythonProcess.stdin.end();

//     // // // Receive output from the script
//     // // pythonProcess.stdout.on('data', (data) => {
//     // //   const responseData = JSON.parse(data);
//     // //   console.log('Response:', responseData);
//     // // });

//     // // // Handle script termination
//     // // pythonProcess.on('close', (code) => {
//     // //   console.log(`Python script exited with code ${code}`);
//     // // });
// }

function pressKey(event) {
    if (event.keyCode == 13) {
        sendQuestion()
    }
}
