const express = require('express');
const router = express.Router();

router.get('/cartegories', (req,res) => {
    res.send('Rotas de categorias');
});

router.get('/admin/categories/new', (req,res) => {
    res.send('Rota para criar uma nova categoria!')
});

module.exports = router;