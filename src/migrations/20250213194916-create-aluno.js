"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("alunos", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                type: Sequelize.STRING
            },
            instrumento: {
                type: Sequelize.STRING
            },
            data_nascimento: {
                type: Sequelize.DATEONLY
            },
            ativo: {
                type: Sequelize.BOOLEAN
            },
            professor_id: {
                allowNull:false,
                type: Sequelize.INTEGER,
                references: { model: "professores", key: "id" }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("alunos");
    }
};
