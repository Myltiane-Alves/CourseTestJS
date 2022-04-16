module.exports = {
    test: {
        client: 'pg',
        version: '8.7',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '95325414',
            database: 'node'
        },
        migrations: {
            directory: './src/migrations'
        },
    },
};