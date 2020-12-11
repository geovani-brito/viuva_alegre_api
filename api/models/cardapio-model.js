'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cardapioModel = new schema({
    data: {type: Date, required: true, index: true},
    pratodia: {type: Array, required: true},
    opcaoprincipal: {type: Array, required: true},
    acompanhamento: {type: Array, required: true},
    sobremesa: {type: Array, required: true},
    bebida: {type: Array, required: true},
    ativa: { type: Boolean, required: true }
}, { versionKey: false });

module.exports = mongoose.model('cardapio', cardapioModel);