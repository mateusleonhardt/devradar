const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb+srv://admin:admin@cluster0-ge0wa.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

setupWebsocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);