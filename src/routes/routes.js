const express = require('express');

//define o processo de rota no framework
const router = express.Router();

const indexView = require(".../view/indexView");

var arrAluno = [{name: 'Ana'}, {name: 'Carlos'}, {name: 'Renato'}];

router.get('/listaAluno', (req, res) =>{
    //let arrAluno = ["Giovanna", "Raphael", "Amanda"];
    let texto = "";

    for (i = 0; i < arrAluno.length; i++) {
        //texto += i + ":" + arrAluno[i] + "<br>";
        texto += i + ":" + Object.values(arrAluno[i]) + "<br>"
    }

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
    res.end(texto);
});

const indexView = require("../view/indexView")

router.get('/formulario', (req, res, next) => {
    res.send(indexView())
});

router.get('/AlunoNome/:name', (req, res) => {
    const {name} = req.params;
    const index = arrAluno.map(aluno => aluno.name).indexOf(name);
    let texto;
    if (index > -1) {
        texto = "<h1>Aluno localizado no sistema.</h1> <h3>O id do Aluno no Array é" + index + "</h3>";
    } else{
        texto = "<h1>Aluno não localizaod no sistema </h1>";
    }
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(texto);
})


//exporta o arquivo para o modulo de exportação, que executa os arquivos externos em conjunto com o framework
module.exports = router;