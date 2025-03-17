import express from 'express';
import cors from 'cors';

const app = express();

// Global middleware
app.ue(cros());
app.use(express.json());

// Custom middleware
const reqLogger = (req, res, next) => {
    console.log(`${req.method}: ${req.url} ${new Date().toISOString()}`);
    next();
};
app.use(reqLogger);

// middleware for specific routes - then after url add the function as a second parameter in route


// Creating Routes
app.get('/health', (req, res) => {
    // console.log(req.query);
    // res.status(400).json({ message: "All good!" });
    res.send('Hey! I am healthy!');
});

app.post('/api/users', reqLogger, (req, res) => {
    throw new Error('something went wrong!');
    res.json({});
});



app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({ message: "Something broke!" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}....`))
