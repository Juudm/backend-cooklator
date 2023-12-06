const jsonServer = require("json-server");
const { atualizarArquivo, verificarAtualizacaoRealizada, marcarAtualizacaoRealizada } = require("./atualizar-db");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.get('/atualizar-db', (req, res) => {
    console.log('Recebida solicitação para /atualizar-db');

    if (!verificarAtualizacaoRealizada()) {
        atualizarArquivo();
        marcarAtualizacaoRealizada();
        res.status(200).json({ message: "Arquivo atualizado com sucesso!" });
    } else {
        res.status(200).json({ message: "Atualização já realizada anteriormente." });
    }
});

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server está rodando na porta ${port}`);
});
