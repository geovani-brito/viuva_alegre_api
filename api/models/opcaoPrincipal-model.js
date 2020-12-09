'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const opcaoPrincipalModel = new schema({
    titulo: { trim: true, index: true, required: true, type: String },
    descricao: { type: String },
    ativa: { type: Boolean, required: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

opcaoPrincipalModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao){
        this.dataCriacao = agora;
    }
    next()
});

module.exports = mongoose.model('opcaoPrincipal', opcaoPrincipalModel);