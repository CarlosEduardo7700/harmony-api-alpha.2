"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Aluno extends Model {
        static associate(models) {
            Aluno.belongsTo(models.Professor, {
                foreignKey: "professor_id"
            });
        }
    }
    Aluno.init({
        nome: DataTypes.STRING,
        instrumento: DataTypes.STRING,
        data_nascimento: DataTypes.DATEONLY,
        ativo: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: "Aluno",
        tableName: "alunos"
    });
    return Aluno;
};