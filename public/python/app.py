from flask import Flask, render_template, request
from langchain.llms import AzureOpenAI
import openai
import os

os.environ["OPENAI_API_TYPE"] = "azure"
os.environ["OPENAI_API_KEY"] = "92c5be9400184e13b741b2ce87196b6f"
os.environ["OPENAI_API_BASE"] = "https://cliniclilly.openai.azure.com/"
os.environ["OPENAI_API_VERSION"] = "2023-05-15"

app = Flask(__name__)

@app.route('/')
def index():
	return render_template("chatbot.html", myfunction=ask_question)

@app.route("/ask_question")
def ask_question():
	llm = AzureOpenAI(deployment_name="turbo", model_name="gpt-35-turbo")
	# Run the LLM
	return render_template("chatbot.html", result=llm("What is the capital of Italy?"))