'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


await queryInterface.bulkInsert('Livreur', [
  {
    nom: "Ghislain",
    prenom: "kepnia",
    telephone:"0101323228",
    motdepasse:"123",
    email: "tghislain@gmail.com",
    quartier:1,  
    actif: true,
    photo: "photolivreur/avatar_livreur",

  },
  {
    nom: "Alpha",
    prenom: "KABA",
    telephone:"664222222",
    motdepasse:"123",
    email: "alphak@gmail.com",
    quartier:1,  
    actif: true,
    photo: "photolivreur/avatar_livreur",

  },
  {
    nom: "Didier",
    prenom: "TIOLA",
    telephone:"628013232",
    motdepasse:"abc",
    email: "didier@gmail.com",
    quartier:1,  
    actif: true,
    photo: "photolivreur/avatar_livreur",

  },

])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
