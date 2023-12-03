const fs = require('fs');

let conteudoAtual = {};
try {
    conteudoAtual = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
} catch (error) {
    console.error('Erro ao ler o arquivo db.json:', error.message);
}

const dadosRecebidos = { novaChave: 'novoValor' };
conteudoAtual = {
    ...conteudoAtual,
    ...dadosRecebidos,
};

fs.writeFileSync('db.json', JSON.stringify(conteudoAtual, null, 2));

console.log('db.json atualizado com sucesso!');
