import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" });
});

app.get("/api/users", (request, response) => {
  response.send([
    { id: 1, useranme: "anson", displayName: "Anson" },
    { id: 2, useranme: "jack", displayName: "Jack" },
    { id: 1, useranme: "adam", displayName: "Adam" },
  ]);
});

app.get("/api/products", (request, response) => {
  response.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

// localhost:3000
// localhost:3000/users
// localhost:3000/products
