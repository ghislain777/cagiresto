const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "repa", deps: [categorie]
 *
 */

const info = {
  revision: 3,
  name: "repa",
  created: "2023-03-05T03:22:58.049Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "repa",
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
        prix: {
          type: Sequelize.FLOAT,
          field: "prix",
          comment: "Prix",
          allowNull: false,
        },
        prixreduit: {
          type: Sequelize.FLOAT,
          field: "prixreduit",
          comment: "Prix réduit",
          allowNull: true,
        },
        photo: {
          type: Sequelize.STRING,
          field: "photo",
          comment: "Photo",
          allowNull: true,
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
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          comment: "Actif",
          defaultValue: true,
          allowNull: false,
        },
        complement: {
          type: Sequelize.BOOLEAN,
          field: "complement",
          comment: "Est complement?",
          defaultValue: false,
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
        categorie: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "categorie", key: "id" },
          field: "categorie",
          name: "categorie",
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
    params: ["repa", { transaction }],
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
