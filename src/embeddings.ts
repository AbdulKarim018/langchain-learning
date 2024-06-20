import { OllamaEmbeddings } from "@langchain/community/embeddings/ollama";
import dotenv from "dotenv";
dotenv.config();

export const embeddings = new OllamaEmbeddings({
  model: "nomic-embed-text",
});

console.log("embedding model ===> ", embeddings.model);

// const e = await embeddings.embedQuery("Hello! My name is Abdul Karim.");
// console.log("length of embeddings ===>", e.length);

// console.log(process.env.HUGGINGFACEHUB_API_KEY);
