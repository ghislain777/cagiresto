const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(updatedAt) => "livreur"
 * removeColumn(createdAt) => "livreur"
 *
 */

const info = {
  revision: 15,
  name: "modifLivreuractifts",
  created: "2023-03-27T06:33:19.201Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["livreur", "updatedAt", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["livreur", "createdAt", { transaction }],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "livreur",
      "updatedAt",
      { type: Sequelize.DATE, field: "updatedAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "livreur",
      "createdAt",
      { type: Sequelize.DATE, field: "createdAt", allowNull: false },
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
