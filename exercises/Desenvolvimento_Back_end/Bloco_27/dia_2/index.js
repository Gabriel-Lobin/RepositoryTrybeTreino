const express = require('express');
const {
    getCep,
    addCep
} = require("./controller/controller");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/ping", (req, res) => {
    res.status(200).json({ message: 'pong!' });
});

app.post('/cep', addCep)

app.get("/cep/:cep", getCep);

app.listen(PORT, () => console.log(`entramos na porta ${PORT}`));
