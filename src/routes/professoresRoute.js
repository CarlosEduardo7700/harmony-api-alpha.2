const { Router } = require("express");
const ProfessorController = require("../controllers/ProfessorController.js");

const router = Router();
const professorController = new ProfessorController();

router.get("/professores", (req, res) => professorController.getAll(req, res));
router.get("/professores/:id", (req, res) => professorController.getById(req, res));
router.post("/professores", (req, res) => professorController.create(req, res));
router.put("/professores/:id", (req, res) => professorController.update(req, res));
router.delete("/professores/:id", (req, res) => professorController.delete(req, res));

module.exports = router;
