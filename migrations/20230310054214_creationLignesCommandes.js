const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "accompagnement", deps: []
 * createTable() => "ligneaccompagnement", deps: [accompagnement, lignecommande]
 *
 */

const info = {
  revision: 5,
  name: "creationLignesCommandes",
  created: "2023-03-10T05:42:14.132Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "accompagnement",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        photo: {
          type: Sequelize.STRING,
          field: "photo",
          comment: "Photo",
          allowNull: false,
        },
        photo1: {
          type: Sequelize.STRING,
          field: "photo1",
          comment: "Photo 1",
          allowNull: true,
        },
        photo2: {
          type: Sequelize.STRING,
          field: "photo2",
          comment: "Photo 2",
          allowNull: true,
        },
        photo3: {
          type: Sequelize.STRING,
          field: "photo3",
          comment: "Photo 3",
          allowNull: true,
        },
        prix: {
          type: Sequelize.INTEGER,
          field: "prix",
          comment: "Prix",
          defaultValue: 0,
          allowNull: false,
        },
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          comment: "Actif",
          defaultValue: true,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "ligneaccompagnement",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        prix: {
          type: Sequelize.INTEGER,
          field: "prix",
          comment: "Prix",
          allowNull: false,
        },
        quantite: {
          type: Sequelize.INTEGER,
          field: "quantite",
          comment: "Quantité",
          defaultValue: 1,
          allowNull: false,
        },
        prixtotal: {
          type: Sequelize.INTEGER,
          field: "prixtotal",
          comment: "Prix Total",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        accompagnement: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "accompagnement", key: "id" },
          field: "accompagnement",
          name: "accompagnement",
          allowNull: true,
        },
        lignecommande: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "lignecommande", key: "id" },
          field: "lignecommande",
          name: "lignecommande",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["accompagnement", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["ligneaccompagnement", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
