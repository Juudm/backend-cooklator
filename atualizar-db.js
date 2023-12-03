const fs = require('fs');

let conteudoAtual = {};
try {
    conteudoAtual = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
} catch (error) {
    console.error('Erro ao ler o arquivo db.json:', error.message);
}

if (conteudoAtual && (typeof conteudoAtual === 'object' || Array.isArray(conteudoAtual))) {

    fs.writeFileSync('db.json', JSON.stringify(conteudoAtual, null, 2));
    console.log('db.json atualizado com sucesso!');
} else {
    console.error('Os dados recebidos não são válidos. Certifique-se de esta passando um objeto.');
}
