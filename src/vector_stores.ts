// Instantiate a new Pinecone client, which will automatically read the
// env vars: PINECONE_API_KEY and PINECONE_ENVIRONMENT which come from
// the Pinecone dashboard at https://app.pinecone.io

import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { embeddings } from "./embeddings.js";

const pinecone = new Pinecone();

const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);

const vectorStore = new PineconeStore(embeddings, { pineconeIndex });

// const docs = [
//   new Document({
//     metadata: { foo: "bar" },
//     pageContent: "pinecone is a vector db",
//   }),
//   new Document({
//     metadata: { foo: "bar" },
//     pageContent: "the quick brown fox jumped over the lazy dog",
//   }),
//   new Document({
//     metadata: { baz: "qux" },
//     pageContent: "lorem ipsum dolor sit amet",
//   }),
//   new Document({
//     metadata: { baz: "qux" },
//     pageContent: "pinecones are the woody fruiting body and of a pine tree",
//   }),
// ];

// const result = await vectorStore.similaritySearch("hi", 2);

// console.log(result);

// const ids = await vectorStore.addDocuments(docs);

// console.log(ids);

// const results = await vectorStore.similaritySearch("pinecone", 100);

// console.log(results.length);

// console.log("Now Deleting all...");

// await vectorStore.delete({ ids: [...ids] });

// const results2 = await vectorStore.similaritySearch("pinecone", 100);

// console.log(results2.length);

// const result = await pineconeIndex.listPaginated();

// const ids = result.vectors?.map((v) => v.id) as string[];

// console.log(ids);

// await vectorStore.delete({
//   ids,
// });

// const result2 = await pineconeIndex.listPaginated();

// console.log(result2.vectors?.map((v) => v.id));

// await vectorStore.delete({
//   ids: [...ids],
// });
