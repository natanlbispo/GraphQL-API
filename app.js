// IMPORTANDO PACOTES
var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

// Schema  GraphQL
var schema = buildSchema(`
    type Query {
        message: String
        teste: String
    }
`);

// Mapeamento
var root = {
    teste: () => "Teste 1",
    message: () => 'Hello World!'
};


var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphql'));