const fs = require('fs');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/atualizar-db', (req, res) => {
    try {
        atualizarArquivo()

        setTimeout(() => {
            res.status(200).send('Atualização bem-sucedida');
        }, 2000);
    } catch (error) {
        console.error('Erro ao atualizar o arquivo db.json:', error.message);
        res.status(500).send('Erro ao atualizar o arquivo db.json');
    }
});

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});

function atualizarArquivo() {
    let conteudoAtual = {};
    try {
        conteudoAtual = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    } catch (error) {
        console.error('Erro ao ler o arquivo db.json:', error.message);
    }

    fs.writeFileSync('db.json', JSON.stringify(conteudoAtual, null, 2));

    console.log('db.json atualizado com sucesso!');
}

