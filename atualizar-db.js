const { readFileSync, writeFileSync } = require("fs");

const controleFilePath = 'controle-atualizacao.json';

function atualizarArquivo() {
    let conteudoAtual = {};
    try {
        conteudoAtual = JSON.parse(readFileSync('db.json', 'utf-8'));
    } catch (error) {
        console.error('Erro ao ler o arquivo db.json:', error.message);
    }

    writeFileSync('db.json', JSON.stringify(conteudoAtual, null, 2));

    console.log('db.json atualizado com sucesso!');
}

function verificarAtualizacaoRealizada() {
    try {
        const controle = JSON.parse(readFileSync(controleFilePath, 'utf-8'));
        return controle.atualizacaoRealizada || false;
    } catch (error) {
        return false;
    }
}

function marcarAtualizacaoRealizada() {
    const controle = { atualizacaoRealizada: true };
    writeFileSync(controleFilePath, JSON.stringify(controle, null, 2));
}

module.exports = { atualizarArquivo, verificarAtualizacaoRealizada, marcarAtualizacaoRealizada };
