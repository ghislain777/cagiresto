const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "menu", deps: []
 * createTable() => "pay", deps: []
 * createTable() => "role", deps: []
 * createTable() => "activite", deps: [menu]
 * createTable() => "ville", deps: [pay]
 * createTable() => "privilege", deps: [activite, role]
 * createTable() => "commune", deps: [ville]
 * createTable() => "utilisateur", deps: [role]
 * createTable() => "quartier", deps: [commune]
 *
 */

const info = {
  revision: 1,
  name: "initial",
  created: "2023-03-04T21:01:54.893Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "menu",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: true,
        },
        icone: {
          type: Sequelize.STRING,
          field: "icone",
          comment: "Icone",
          defaultValue: "",
          allowNull: false,
        },
        position: {
          type: Sequelize.INTEGER,
          field: "position",
          comment: "Position",
          defaultValue: 1,
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
      "pay",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
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
      "role",
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
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
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
      "activite",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: true,
        },
        chemain: {
          type: Sequelize.STRING,
          field: "chemain",
          comment: "Chemain",
          defaultValue: "",
          allowNull: true,
        },
        icone: {
          type: Sequelize.STRING,
          field: "icone",
          comment: "Icone",
          defaultValue: "",
          allowNull: true,
        },
        position: {
          type: Sequelize.INTEGER,
          field: "position",
          comment: "Position",
          defaultValue: 1,
          allowNull: true,
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
        menu: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "menu", key: "id" },
          field: "menu",
          name: "menu",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "ville",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
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
        pay: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "pay", key: "id" },
          field: "pay",
          name: "pay",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "privilege",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: false,
        },
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          comment: "Actif?",
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
        activite: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "activite", key: "id" },
          field: "activite",
          name: "activite",
          allowNull: true,
        },
        role: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "role", key: "id" },
          field: "role",
          name: "role",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "commune",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
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
        ville: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "ville", key: "id" },
          field: "ville",
          name: "ville",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "utilisateur",
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
        prenom: { type: Sequelize.STRING, field: "prenom", allowNull: false },
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          comment: "Téléphone",
          allowNull: false,
        },
        email: { type: Sequelize.STRING, field: "email", allowNull: false },
        motdepasse: {
          type: Sequelize.STRING,
          field: "motdepasse",
          allowNull: false,
        },
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          defaultValue: false,
          allowNull: false,
        },
        photo: {
          type: Sequelize.STRING,
          field: "photo",
          defaultValue: "",
          allowNull: false,
        },
        token: {
          type: Sequelize.STRING,
          field: "token",
          defaultValue: "",
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
        role: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "role", key: "id" },
          field: "role",
          name: "role",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "quartier",
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
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
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
        commune: {
          type: Sequelize.INTEGER,
          field: "commune",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "commune", key: "id" },
          name: "commune",
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
    params: ["activite", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["commune", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["menu", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["pay", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["privilege", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["quartier", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["role", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["utilisateur", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["ville", { transaction }],
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
