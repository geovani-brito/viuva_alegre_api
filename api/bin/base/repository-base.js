'use strict'
const mongoose = require('mongoose');

class repositoryBase {

    constructor(model) {
        this._model = mongoose.model(model);
    }

    async create(data) {
        let modelo = new this._model(data);
        let resultado = await modelo.save();
        return resultado;
    }

    async update(id, data){ 
        await this._model.findByIdAndUpdate(id, { $set: data });
        let resultado = this._model.findById(id);
        return resultado;
    }
    
    async getAll() {
        return await this._model.find();
    }

    async getById(id) {
        return this._model.findById(id);
    }
    
    async delete(id) {
        return await this._model.findByIdAndDelete(id);
    }
}

module.exports = repositoryBase;