const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', (req, res) => {
  const lang = req.headers['accept-language'];
  const langDir = lang === 'en' ? 'en' : 'fr';
  res.sendFile(`index.html.${langDir}`, { root: './public' });
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});
app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'product.html'));
});
app.get('/config', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'config.html'));
});
app.get('/impressum', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'impressum.html'));
});
app.get('/datenschutzen', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'datenschutzen.html'));
});
app.get('/datenschutzde', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'datenschutzde.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});
app.listen(3000, () => { console.log('Server running at http://localhost:3000');
});