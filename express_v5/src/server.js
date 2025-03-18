import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Express Server is Running');
});

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
