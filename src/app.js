const consign = require('consign');

const app = require('express')();

consign({ cwd: 'src', verbose: false })
    .include('src/config/middlewares.js')
    .then('src/routes')
    .then('src/config/routes.js')
    .into(app);

app.get('/', (req, res) => {
    res.status(200).send()
});

module.exports = app;