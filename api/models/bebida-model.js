'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bebidaModel = new schema({
    titulo: { trim: true, index: true, required: true, type: String },
    descricao: { type: String },
    foto: { type: String, required: false },
    ativa: { type: Boolean, required: true },
    preco: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

bebidaModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao){
        this.dataCriacao = agora;
    }
    next()
});

module.exports = mongoose.model('bebida', bebidaModel);