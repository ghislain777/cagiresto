const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "livreur", deps: [quartier]
 * addColumn(livreur) => "commande"
 *
 */

const info = {
  revision: 12,
  name: "creationdelivreur",
  created: "2023-03-26T21:58:53.406Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "livreur",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        photo: {
          type: Sequelize.STRING,
          field: "photo",
          comment: "Photo",
          allowNull: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        prenom: {
          type: Sequelize.STRING,
          field: "prenom",
          comment: "Prénom",
          allowNull: false,
        },
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          comment: "Téléphone",
          allowNull: false,
          unique: true,
        },
        email: {
          type: Sequelize.STRING,
          field: "email",
          comment: "Email",
          unique: true,
          allowNull: false,
        },
        motdepasse: {
          type: Sequelize.STRING,
          field: "motdepasse",
          comment: "Mot de passe",
          allowNull: false,
        },
        position: {
          type: Sequelize.GEOMETRY("POINT"),
          field: "position",
          comment: "Position",
          allowNull: true,
        },
        dateposition: {
          type: Sequelize.DATE,
          field: "dateposition",
          comment: "Date de position",
          allowNull: true,
        },
        acif: {
          type: Sequelize.BOOLEAN,
          field: "acif",
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
        quartier: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "quartier", key: "id" },
          field: "quartier",
          name: "quartier",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "commande",
      "livreur",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "livreur", key: "id" },
        field: "livreur",
        name: "livreur",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["commande", "livreur", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["livreur", { transaction }],
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
