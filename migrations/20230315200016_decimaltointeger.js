const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(prixtotal) => "commande"
 * changeColumn(prixrepa) => "commande"
 * changeColumn(prixlivraison) => "commande"
 * changeColumn(prixunitaire) => "lignecommande"
 * changeColumn(prixtotal) => "lignecommande"
 * changeColumn(prix) => "repa"
 * changeColumn(prixreduit) => "repa"
 *
 */

const info = {
  revision: 9,
  name: "decimaltointeger",
  created: "2023-03-15T20:00:16.315Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "commande",
      "prixtotal",
      {
        type: Sequelize.INTEGER,
        field: "prixtotal",
        comment: "Prix total",
        defaultValue: 0,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "commande",
      "prixrepa",
      {
        type: Sequelize.INTEGER,
        field: "prixrepa",
        comment: "Prix des repas",
        defaultValue: 0,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "commande",
      "prixlivraison",
      {
        type: Sequelize.INTEGER,
        field: "prixlivraison",
        comment: "Prix de livraison",
        defaultValue: 0,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "lignecommande",
      "prixunitaire",
      {
        type: Sequelize.INTEGER,
        field: "prixunitaire",
        comment: "Prix unitaire",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "lignecommande",
      "prixtotal",
      {
        type: Sequelize.INTEGER,
        field: "prixtotal",
        comment: "Prix total",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "repa",
      "prix",
      {
        type: Sequelize.INTEGER,
        field: "prix",
        comment: "Prix",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "repa",
      "prixreduit",
      {
        type: Sequelize.INTEGER,
        field: "prixreduit",
        comment: "Prix réduit",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "commande",
      "prixtotal",
      {
        type: Sequelize.DECIMAL(10),
        field: "prixtotal",
        comment: "Prix total",
        defaultValue: 0,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "commande",
      "prixrepa",
      {
        type: Sequelize.DECIMAL(10),
        field: "prixrepa",
        comment: "Prix des repas",
        defaultValue: 0,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "commande",
      "prixlivraison",
      {
        type: Sequelize.DECIMAL(10),
        field: "prixlivraison",
        comment: "Prix de livraison",
        defaultValue: 0,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "lignecommande",
      "prixunitaire",
      {
        type: Sequelize.DECIMAL(10, 2),
        field: "prixunitaire",
        comment: "Prix unitaire",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "lignecommande",
      "prixtotal",
      {
        type: Sequelize.DECIMAL(10, 2),
        field: "prixtotal",
        comment: "Prix total",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "repa",
      "prix",
      {
        type: Sequelize.FLOAT,
        field: "prix",
        comment: "Prix",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "repa",
      "prixreduit",
      {
        type: Sequelize.FLOAT,
        field: "prixreduit",
        comment: "Prix réduit",
        allowNull: true,
      },
      { transaction },
    ],
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
