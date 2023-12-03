const fs = require('fs');

let conteudoAtual = {};
let alteracaoPendente = false;

function arquivoModificado() {

    fs.watch('db.json', (evento, nomeArquivo) => {
        if (nomeArquivo && evento === 'change' && !alteracaoPendente) {

            alteracaoPendente = true;

            try {
                conteudoAtual = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
            } catch (error) {
                console.error('Erro ao ler o arquivo db.json:', error.message);
            }

            setTimeout(() => {
                alteracaoPendente = false;
            }, 1000);
        }
    });
}

arquivoModificado();
