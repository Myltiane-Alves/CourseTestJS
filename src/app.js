const app = require('express')();
const consign = require('consign');
const knex = require('../knexfile');
const knexfile  = require('../knexfile');

// TODO criar chaveamento dinamico
app.db = knex(knexfile.test);

consign({ cwd: 'src', verbose: false })
    .include('src/config/middlewares.js')
    .then('src/routes')
    .then('src/config/routes.js')
    .into(app);

app.get('/', (req, res) => {
    res.status(200).send()
});

module.exports = app;