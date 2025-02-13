"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {

        await queryInterface.bulkInsert("alunos", [
            {
                nome: "Mateus Silva",
                instrumento: "Violino",
                data_nascimento: "2007-04-10",
                ativo: true,
                professor_id: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nome: "Tiago Oliveira",
                instrumento: "Flauta",
                data_nascimento: "2002-10-23",
                ativo: true,
                professor_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nome: "Paulo Santos",
                instrumento: "Bombardino",
                data_nascimento: "1997-02-11",
                ativo: true,
                professor_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete("alunos", null, {});
    }
};