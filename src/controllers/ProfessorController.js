const Controllers = require("./Controllers.js");
const PessoaService = require("../services/ProfessorService.js");

const pessoaService = new PessoaService();

class ProfessorController extends Controllers {

    constructor() {
        super(pessoaService);
    }

}

module.exports = ProfessorController;