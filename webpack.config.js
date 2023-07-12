// // webpack.config.js
// require ('dotenv').config();
// const path = require('path');
// const { OpenAI } = require ("langchain/llms/openai");

// module.exports = {
//   mode: 'development',
//   entry: './public/js/chatbot.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
// };

// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/js/chatbot.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd', // Generate a Universal Module Definition (UMD) bundle
  },
};

