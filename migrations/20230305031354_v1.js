const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "categorie", deps: []
 * createTable() => "complement", deps: []
 * createTable() => "modedepayement", deps: []
 * createTable() => "client", deps: [quartier]
 * createTable() => "adresse", deps: [client, quartier]
 * createTable() => "commande", deps: [client, adresse, modedepayement]
 * createTable() => "lignecommande", deps: [commande]
 *
 */

const info = {
  revision: 2,
  name: "v1",
  created: "2023-03-05T03:13:54.781Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "categorie",
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
      "complement",
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
          type: Sequelize.DECIMAL(10),
          field: "prix",
          comment: "Prix",
          defaultValue: 0,
          allowNull: false,
        },
        photo: {
          type: Sequelize.STRING,
          field: "photo",
          comment: "Photo",
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
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "modedepayement",
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
          unique: true,
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
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "client",
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
        },
        mail: {
          type: Sequelize.STRING,
          field: "mail",
          comment: "Mail",
          unique: true,
          allowNull: false,
        },
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          comment: "Actif",
          defaultValue: true,
          allowNull: false,
        },
        motdepasse: {
          type: Sequelize.STRING,
          field: "motdepasse",
          comment: "Mot de passe",
          allowNull: false,
        },
        token: {
          type: Sequelize.STRING,
          field: "token",
          comment: "Token",
          allowNull: true,
        },
        photo: {
          type: Sequelize.STRING,
          field: "photo",
          comment: "Photo",
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
    fn: "createTable",
    params: [
      "adresse",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        ligne1: {
          type: Sequelize.STRING,
          field: "ligne1",
          comment: "Ligne 1",
          allowNull: false,
        },
        ligne2: {
          type: Sequelize.STRING,
          field: "ligne2",
          comment: "Ligne 2",
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
        client: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "client", key: "id" },
          field: "client",
          name: "client",
          allowNull: true,
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
    fn: "createTable",
    params: [
      "commande",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        datelivraison: {
          type: Sequelize.DATE,
          field: "datelivraison",
          comment: "Date de livraison",
          allowNull: true,
        },
        prixtotal: {
          type: Sequelize.DECIMAL(10),
          field: "prixtotal",
          comment: "Prix total",
          defaultValue: 0,
          allowNull: false,
        },
        prixrepa: {
          type: Sequelize.DECIMAL(10),
          field: "prixrepa",
          comment: "Prix des repas",
          defaultValue: 0,
          allowNull: false,
        },
        prixlivraison: {
          type: Sequelize.DECIMAL(10),
          field: "prixlivraison",
          comment: "Prix de livraison",
          defaultValue: 0,
          allowNull: false,
        },
        statut: {
          type: Sequelize.STRING,
          field: "statut",
          comment: "Statut de la commande",
          defaultValue: "En attente",
          allowNull: false,
        },
        noteclient: {
          type: Sequelize.STRING,
          field: "noteclient",
          comment: "Note du client",
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
        client: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "client", key: "id" },
          field: "client",
          name: "client",
          allowNull: true,
        },
        adresse: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "adresse", key: "id" },
          field: "adresse",
          name: "adresse",
          allowNull: true,
        },
        modedepayement: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "modedepayement", key: "id" },
          field: "modedepayement",
          name: "modedepayement",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "lignecommande",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        prixunitaire: {
          type: Sequelize.DECIMAL(10, 2),
          field: "prixunitaire",
          comment: "Prix unitaire",
          allowNull: false,
        },
        prixtotal: {
          type: Sequelize.DECIMAL(10, 2),
          field: "prixtotal",
          comment: "Prix total",
          allowNull: false,
        },
        quantite: {
          type: Sequelize.INTEGER,
          field: "quantite",
          comment: "Quantité",
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
        commande: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "commande", key: "id" },
          field: "commande",
          name: "commande",
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
    params: ["adresse", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["categorie", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["client", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["commande", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["complement", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["lignecommande", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["modedepayement", { transaction }],
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
