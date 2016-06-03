'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/1', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/01_Communicate_Using_Space/index.html'));
});

app.get('/2', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/02_GarberCo/index.html'));
});

app.get('/3', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/03_ArielWenZhang/index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
	console.log('Server running on ' + server.address().port);
});
