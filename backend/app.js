const express = require('express');
const app = express();

const corsMiddleware = require('./middlewares/cors');
const loggerMiddleware = require('./middlewares/logger');

const userRoutes = require('./routes/user.routes');

// middlewares globaux
app.use(corsMiddleware);
app.use(loggerMiddleware);

app.use(express.json());

// routes
app.use('/api/user', userRoutes);

// middleware 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

module.exports = app;