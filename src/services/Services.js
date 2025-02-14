const dataSource = require("../models");

class Services {

    constructor(model) {
        this.model = model;
    }

    async getAll() {
        return dataSource[this.model].findAll();
    }

    async getById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async create(dadosParaCadastro) {
        return dataSource[this.model].create(dadosParaCadastro);
    }

    async update(dadosAtualizados, id) {
        const listaDosDadosAtualizados = dataSource[this.model].update(dadosAtualizados, {
            where: {
                id: id
            }
        });

        if (listaDosDadosAtualizados[0] === 0) {
            return false;
        } else {
            return true;
        }
    }

    async delete(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }

}

module.exports = Services;