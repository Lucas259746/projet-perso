const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});


app.use((req, res, next) => {
  res.status(200);
  next();
});


app.use( (req, res, next) => {
  const users = [
    {
      _id: 'oeihfzeoi',
      firstName: 'laura',
      lastName: 'dupont',
      email: 'tarteaucafe@example.com',
      userId: 'qsomihvqios',
    },
    {
      _id: 'tralala02',
      firstName: 'timothée',
      lastName: 'kiwi',
      email: 'tartineaukiwi@example.com',
      userId: 'qsomihvqios',
    },
  ];
  res.json(users);$
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app;