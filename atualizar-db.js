const fs = require('fs');
const chokidar = require('chokidar');

let conteudoAtual = {};

function arquivoModificado() {

    const watcher = chokidar.watch('db.json', {
        ignoreInitial: true,
    });

    watcher.on('change', (caminhoArquivo) => {
        console.log(`Arquivo ${caminhoArquivo} foi modificado.`);

        try {
            conteudoAtual = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf-8'));
        } catch (error) {
            console.error('Erro ao ler o arquivo db.json:', error.message);
        }
    });

    watcher.on('error', (erro) => {
        console.error(`Erro na observação de alterações: ${erro}`);
    });
}

arquivoModificado();
