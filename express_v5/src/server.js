import express from 'express';
import Logger from './middleware/logger.js';
import videoRoutes from './routes/videoRoutes.js';
import indexRoutes from './routes/indexRoutes.js';
import cardsRoutes from './routes/cardsRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import shortRoutes from './routes/shortRoutes.js';
import postRouter from './routes/postRoute.js'
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON data (important for POST and PUT requests)
app.use(cors());
app.use(express.json());

// Apply Logger Middleware
app.use(Logger);

// Setting up EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Using the Routes
app.use('/', indexRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/cards', cardsRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/shorts', shortRoutes);

// Using routes post request
app.use('/api', postRouter);


// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
