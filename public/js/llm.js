//require('dotenv').config();
//const { OpenAI } = require("langchain/llms/openai");
import { OpenAI } from "langchain/llms/openai";

const model = new OpenAI({
    // azureOpenAIApiKey: "92c5be9400184e13b741b2ce87196b6f",
    // azureOpenAIApiInstanceName: "gpt-35-turbo",
    // azureOpenAIApiDeploymentName: "turbo",
    // azureOpenAIApiVersion: "2023-05-15",
    temperature: 0.0,
});

async function myFunction() {
    const res = await model.call(
    "What would be a good company name a company that makes colorful socks?"
    );
    console.log(res);
}

myFunction();


