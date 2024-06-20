import { ChatOllama } from "@langchain/community/chat_models/ollama";

// const chatLLM = new ChatOllama({
//   model: "llama3:8b-instruct-q2_K",
//   // format: "json",
// });

// console.log("chat model ====> ", chatLLM.model);

// const str = await chatLLM.stream(`Translate "I love programming" into German.`);

// const c = [];

// for await (const chunk of str) {
//   c.push(chunk.content);
// }

// console.log(c.join(""));

// Text Completion Model

import { Ollama } from "@langchain/community/llms/ollama";

const llm = new Ollama({
  model: "tinyllama",
});

console.log("chat model ====> ", llm.model);

// const stream = await llm.stream("hi! how are you today?");
const stream = await llm.stream(`Translate "I love programming" into German.`);

const chunks = [];
for await (const chunk of stream) {
  chunks.push(chunk);
}
console.log(chunks.join(""));
