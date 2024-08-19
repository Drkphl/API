const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Hello word!');
});

app.get('/segunda-rota', (req, res) => {
    res.send('Segunda Rota!');
});
app.get('/prime-day/:produto', (req, res) => {
    req.params;
    res.send(`o produto comprado foi ${req.params.produto}`);
});

app.listen(porta, () => console.log(`O sevidor iniciou na porta ${porta}`));
