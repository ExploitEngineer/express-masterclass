const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { id: "1", title: "Post One" },
    { id: "2", title: "Post Two" },
    { id: "3", title: "Post Three" },
];

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
