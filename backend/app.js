const express = require('express');
const app = express();

const cors = require('./middlewares/cors');
const logger = require('./middlewares/logger');



const userRoutes = require('./routes/user.routes');


app.use(cors);
app.use(logger);



app.use(express.json());

// routes
app.use('/api/user', userRoutes);

// middleware 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

module.exports = app;