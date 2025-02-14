const express = require("express");
const professores = require("../routes/professoresRoute.js");

module.exports = app => {
    app.use(
        express.json(),
        professores
    );
};