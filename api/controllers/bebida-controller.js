'use strict'

require('../models/bebida-model');
const repository = require('../repositories/bebida-repository');

class bebida {

}

bebida.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}
bebida.prototype.put = async (req, res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}
bebida.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}
bebida.prototype.getById = async (req, res) => {
    let categoria = await new repository().getById(req.params.id);
    res.status(200).send(categoria);
}

bebida.prototype.delete = async (req, res) => {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
}

module.exports = bebida