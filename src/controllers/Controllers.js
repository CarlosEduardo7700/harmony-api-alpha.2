class Controllers {

    constructor(service) {
        this.service = service;
    }

    async getAll(req, res) {
        try {
            const lista = await this.service.getAll();
            return res.status(200).json(lista);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const dadosEncontrados = await this.service.getById(Number(id));
            return res.status(200).json(dadosEncontrados);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async create(req, res) {
        const dadosParaCadastro = req.body;
        try {
            const novoCadastro = await this.service.create(dadosParaCadastro);
            return res.status(201).json(novoCadastro);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async update(req, res) {

        const { id } = req.params;

        const dadosAtualizados = req.body;

        try {

            const foiAtualizado = await this.service.update(dadosAtualizados, Number(id));

            if (!foiAtualizado) {
                return res.status(400).json({ message: "Erro ao tentar atualizar os dados!" });
            } else {
                return res.status(200).json({ message: "Dados atualizados com sucesso!" });
            }

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            await this.service.delete(Number(id));
            return res.status(200).json({ message: `Registro de ID ${id} deletado!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = Controllers;