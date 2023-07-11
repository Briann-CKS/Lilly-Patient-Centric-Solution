
// index.js

LILLY_CHAT_API = "https://chat.apps.lrl.lilly.com/ask/cliniclilly"

// function sendQuestion() {
    // Get the user input from the input field
    // const userInput = document.getElementById("userInput").value;
  
    // Perform any necessary actions with the user's query
    // For example, you can display it in the chat container as a user bubble
    //const chatContainer = document.querySelector(".chat-container");
    //const userBubble = document.createElement("div");
    //userBubble.setAttribute("class", "user-bubble bubble");
    //userBubble.textContent = userInput;
    //chatContainer.appendChild(userBubble);

    //const botBubble = document.createElement("div");
    //botBubble.setAttribute("class", "bot-bubble bubble");
    //botBubble.textContent = "I cannot answer your question at the moment.";
    //chatContainer.appendChild(botBubble);

    // Clear the input field after sending the question
    //document.getElementById("userInput").value = "";

    //sendQueryLillyChat(userInput);
//}

function sendQueryLillyChat(input) {
    const query = { q: input };
    const params = new URLSearchParams(query);
    const url = `${LILLY_CHAT_API}?${params}`;

    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
}

function sendQuestion() {
  const userInput = document.getElementById("userInput").value;
  const chatContainer = document.querySelector(".chat-container");
  const userBubble = document.createElement("div");
  userBubble.classList.add("user-bubble");
  userBubble.textContent = userInput;
  chatContainer.appendChild(userBubble);
  document.getElementById("userInput").value = "";

  // Create a new URLSearchParams object
  const params = new URLSearchParams();

  // Add the user input as a parameter
  params.append("query", userInput);

  // Get the query string
  const queryString = params.toString();

  // Create the API endpoint URL with the query string
  const apiUrl = "https://chat.apps.lrl.lilly.com/ask/cliniclillyq=What is a clinical trial" + queryString;

  // Use the apiUrl in your API request
  // ...
  // Access the query parameters using the searchParams property
  const url = new URL("https://chat.apps.lrl.lilly.com/ask/cliniclillyq=What is a clinical trial");
  const paramsFromUrl = url.searchParams;

  // Get the value of a specific parameter
  const param1Value = paramsFromUrl.get("param1");
  console.log(param1Value); // Output: "value1"

}
