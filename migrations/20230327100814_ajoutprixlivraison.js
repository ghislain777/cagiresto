const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "prilivraison", deps: [commune]
 *
 */

const info = {
  revision: 20,
  name: "ajoutprixlivraison",
  created: "2023-03-27T10:08:14.501Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "prilivraison",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        montant: {
          type: Sequelize.INTEGER,
          field: "montant",
          comment: "Montant",
          defaultValue: 0,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
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
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "commune", key: "id" },
          field: "commune",
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
    params: ["prilivraison", { transaction }],
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
