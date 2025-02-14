const Controllers = require("./Controllers.js");
const ProfessorService = require("../services/ProfessorService.js");

const professorService = new ProfessorService();

class ProfessorController extends Controllers {

    constructor() {
        super(professorService);
    }

    async getAlunosByProfessor(req, res) {
        const { id } = req.params;

        try {
            const listaDeAlunos = await professorService.getAlunosByProfessor(Number(id));
            return res.status(200).json(listaDeAlunos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = ProfessorController;