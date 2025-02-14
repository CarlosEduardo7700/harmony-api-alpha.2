const Services = require("./Services.js");

class ProfessorService extends Services {

    constructor() {
        super("Professor");
    }

    async getAlunosByProfessor(id) {
        const professor = await super.getById(id);
        const listaDeAlunos = await professor.getAlunos();
        return listaDeAlunos;
    }
 
}

module.exports = ProfessorService;