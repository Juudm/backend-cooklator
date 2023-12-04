const fs = require('fs');

function atualizarArquivo() {
    let conteudoAtual = {};
    try {
        conteudoAtual = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    } catch (error) {
        console.error('Erro ao ler o arquivo db.json:', error.message);
        return;
    }

    fs.writeFileSync('db.json', JSON.stringify(conteudoAtual, null, 2));

    console.log('db.json atualizado com sucesso!');
}

atualizarArquivo();

const intervalo = 15 * 60 * 1000; // 15 minutos
setInterval(atualizarArquivo, intervalo);
