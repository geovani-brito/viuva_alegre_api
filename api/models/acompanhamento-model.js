'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const acompanhamentoModel = new schema({
    titulo: { trim: true, index: true, required: true, type: String },
    observacao: { type: String },
    ativa: { type: Boolean, required: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

acompanhamentoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao){
        this.dataCriacao = agora;
    }
    next()
});

module.exports = mongoose.model('acompanhamento', acompanhamentoModel);