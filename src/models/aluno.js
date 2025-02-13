"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
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