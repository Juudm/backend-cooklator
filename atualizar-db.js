const jsonServer = require("json-server");
const {readFileSync, writeFileSync} = require("fs");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

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


server.get('/atualizar-db', (req, res) => {
    console.log('Recebida solicitação para /atualizar-db');
    atualizarArquivo()

    res.status(200).json({message: "Arquivo atualizado com sucesso!"});
});

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server está rodando na porta ${port}`);
});
