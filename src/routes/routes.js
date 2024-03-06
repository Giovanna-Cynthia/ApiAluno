const express = require('express');

//define o processo de rota no framework
const router = express.Router();



router.get('/listaAluno', (req, res) =>{
    let arrAluno = ["Giovanna", "Raphael", "Amanda"];
    let texto = "";

    for (i = 0; i < arrAluno.length; i++) {
        texto += i + ":" + arrAluno[i] + "<br>";
    }

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' 
    });
    res.end(texto);
});

const indexView = require("../view/indexView")

router.get('/formulario', (req, res, next) => {
    res.send(indexView())
});


//exporta o arquivo para o modulo de exportação, que executa os arquivos externos em conjunto com o framework
module.exports = router;