const Controllers = require("./Controllers");
const AlunoService = require("../services/AlunoService.js");

const alunoService = new AlunoService();

class AlunoController extends Controllers {
    constructor() {
        super(alunoService);
    }
}

module.exports = AlunoController;