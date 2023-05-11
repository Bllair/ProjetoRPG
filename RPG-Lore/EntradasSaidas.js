class FuncoesES{
    constructor(){
        const prompt = require('prompt-sync')();        
    }
    entrada(mensagem){
        return prompt(mensagem);
    }
    mensagemSimples(mensagem){
        console.log(mensagem);
    }
    mensagemCompleta(mensagem){
        console.log("***********************************");
        console.log(mensagem)
        console.log("***********************************")
    }
}

module.exports = FuncoesES;