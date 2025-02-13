"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
    
        await queryInterface.bulkInsert("professores", [
            {
                nome: "Davi Pereira",
                instrumento: "Flauta",
                email: "davi.pereira@email.com",
                senha: "ivad@123",
                ativo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nome: "Samuel Carvalho",
                instrumento: "Bombardino",
                email: "samuel.carvalho@email.com",
                senha: "leumas@456",
                ativo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nome: "José Costa",
                instrumento: "Violino",
                email: "jose.costa@email.com",
                senha: "esoj@789",
                ativo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
    
        await queryInterface.bulkDelete("professores", null, {});
    
    }
};
