import express from 'express';

const router = express.Router();

// Basic route
router.get('/', (req, res) => {
    res.send('Express Server is Running');
});

// About route
router.get('/about', (req, res) => {
    res.send('You are on About page');
});

// Dynamic Route
router.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`Hello, ${userName}`);
});

// Rendering EJS file
router.get('/greet/:name', (req, res) => {
    const userName = req.params.name;
    res.render('index', { name: userName });
})

export default router;
