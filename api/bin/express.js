const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('./configuration/variables');

const pratodiaRouter = require('../routes/pratodia-router');
const opcaoPrincipalRouter = require('../routes/opcaoPrincipal-router');
const acompanhamentoRouter = require('../routes/acompanhamento-router');
const sobremesaRouter = require('../routes/sobremesa-router');
const bebidaRouter = require('../routes/bebida-router');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api/pratodia', pratodiaRouter);
app.use('/api/opcaoprincipal', opcaoPrincipalRouter);
app.use('/api/acompanhamento', acompanhamentoRouter);
app.use('/api/sobremesa', sobremesaRouter);
app.use('/api/bebida', bebidaRouter);

mongoose.connect(
    variables.Database.connection, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
mongoose.set('useCreateIndex', true);
    

module.exports = app;