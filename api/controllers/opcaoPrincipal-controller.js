'use strict'

require('../models/opcaoPrincipal-model');
const repository = require('../repositories/opcaoPrincipal-repository');

class opcaoPrincipal {

}

opcaoPrincipal.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}
opcaoPrincipal.prototype.put = async (req, res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}
opcaoPrincipal.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}
opcaoPrincipal.prototype.getById = async (req, res) => {
    let categoria = await new repository().getById(req.params.id);
    res.status(200).send(categoria);
}

opcaoPrincipal.prototype.delete = async (req, res) => {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
}

module.exports = opcaoPrincipal