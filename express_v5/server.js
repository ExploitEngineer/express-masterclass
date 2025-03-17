import express from 'express';

const app = express();


// Creating Routes
app.get('/', (req, res) => {
    res.send('Welcome to coders bank!');
});

app.get('/hello', (req, res) => {
    res.send('hello!')
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}....`))
