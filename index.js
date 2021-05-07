const express = require('express');
require('dotenv').config()
const massive = require('massive');

const controller = require('./products_controller')

const app = express();

const { SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(dbInstance => {
    app.set('db', dbInstance);
})
.catch(err => {
    console.error(err)
})

app.post('/api/products', controller.create);

app.get('/api/products', controller.getAll);

app.get('/api/products/:id', controller.getOne);

app.put('/api/products/:id', controller.update);

app.delete('/api/products/:id', controller.delete);

app.listen(SERVER_PORT, () => {
    console.log('listening on port ' + SERVER_PORT);
})
