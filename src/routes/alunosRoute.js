const { Router } = require("express");
const AlunoController = require("../controllers/AlunoController.js");

const router = Router();
const alunoController = new AlunoController();

router.get("/alunos", (req, res) => alunoController.getAll(req, res));
router.get("/alunos/:id", (req, res) => alunoController.getById(req, res));
router.post("/alunos", (req, res) => alunoController.create(req, res));
router.put("/alunos/:id", (req, res) => alunoController.update(req, res));
router.delete("/alunos/:id", (req, res) => alunoController.delete(req, res));

module.exports = router;