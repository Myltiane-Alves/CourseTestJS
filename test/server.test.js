const supertest = require('supertest');

const request = supertest('http://localhost:3000');

test('Devo responder na porta 3000', () => {
    // acessar a url http://localhost:3000
    return request.get('/')
    .then(res => expect(res.status).toBe(200));

    // verificar o status da respostas
})