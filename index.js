const express = require('express');
const porta = 3000;

const app = express();

app.get('/listaAluno', (req, res) => {
    let arrAluno = ["Giovanna", "Raphael", "Amanda"];
    let texto = "";

    for (i = 0; i < arrAluno.length; i++) {
        texto += i + ":" + arrAluno[i] + "<br>";
    }

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' 
    });
    res.end(texto);
});
app.listen(porta, () => {
    console.log("Servidor ok...")
});