const express = require("express");
const professores = require("../routes/professoresRoute.js");
const alunos = require("../routes/alunosRoute.js");

module.exports = app => {
    app.use(
        express.json(),
        professores,
        alunos
    );
};