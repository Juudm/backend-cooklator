
const fs = require('fs');

let conteudoAtual = {};

function arquivoModificado() {

    fs.watch('db.json', (evento, nomeArquivo) => {
        if (nomeArquivo && evento === 'change') {

            try {
                conteudoAtual = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
            } catch (error) {
                console.error('Erro ao ler o arquivo db.json:', error.message);
            }
        }
    });
}

arquivoModificado();
