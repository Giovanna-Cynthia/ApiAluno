const express = require('express');
const porta = 3000;
const app = express();
app.use(express.static("public"));

const routes = require('./src/routes/routes');

app.use('/', routes);

app.listen(porta, () => {
    console.log("Servidor executado na porta 3000");
});