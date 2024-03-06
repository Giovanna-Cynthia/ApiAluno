
const retornoTela = () => {
    const tela = ( `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css">
        <title>Forms</title>
    </head>
    <body>
        <h3> Formulário</h3>
    
    <div>
    <form>
        <label for="fname">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Seu nome..">
    
        <label for="lname">Endereço: </label>
        <input type="text" id="endereco" name="endereco" placeholder="Seu endereço...">
    
        <label for="lname">Email: </label>
        <input type="text" id="email" name="email" placeholder="Seu email...">
    
        <label for="lname">Telefone: </label>
        <input type="text" id="telefone" name="telefone" placeholder="Seu telefone...">
    
    
        <input id="btn" type="submit" value="Submit">
    </form>
    </div>
    <script src="script.js"></script>
    </body>
    </html>
`);
return tela;
}
module.exports = retornoTela;