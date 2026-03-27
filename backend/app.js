const express = require('express');
const app = express();

const cors = require('./middlewares/cors');
const logger = require('./middlewares/logger');
const lightCones = require('./middlewares/lightCones')
const profile = require('./middlewares/profile')
const relics = require('./middlewares/relics')
const starfaringCompanions = require('./middlewares/starfaringCompanions')
const stats = require('./middlewares/stats')
const user = require('./middlewares/user')


const userController = require('./controllers/user.controller')

const userRoutes = require('./routes/user.routes');


app.use(cors);
app.use(logger);
app.use(lightCones)
app.use(profile)
app.use(relics)
app.use(starfaringCompanions)
app.use(stats)
app.use(user)


app.use(express.json());

// routes
app.use('/api/user', userRoutes);

// middleware 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

module.exports = app;