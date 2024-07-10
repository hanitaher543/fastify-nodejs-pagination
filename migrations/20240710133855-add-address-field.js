'use strict';

const { allowedNodeEnvironmentFlags } = require('process');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
 await queryInterface.addColumn('Users', 'address' ,{ 
  type : Sequelize.STRING,
  allowNull :false

  });
 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
