"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Professor extends Model {
        static associate(models) {
            Professor.hasMany(models.Aluno, {
                foreignKey: "professor_id",
                as: "alunos"
            });
        }
    }
    Professor.init({
        nome: DataTypes.STRING,
        instrumento: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: "Professor",
        tableName: "professores"
    });
    return Professor;
};