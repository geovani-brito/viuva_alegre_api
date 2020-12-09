'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const sobremesaModel = new schema({
    titulo: { trim: true, index: true, required: true, type: String },
    descricao: { type: String },
    ativa: { type: Boolean, required: true },
    preco: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

sobremesaModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao){
        this.dataCriacao = agora;
    }
    next()
});

module.exports = mongoose.model('sobremesa', sobremesaModel);