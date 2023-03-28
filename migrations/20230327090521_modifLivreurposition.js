const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(position) => "livreur"
 *
 */

const info = {
  revision: 19,
  name: "modifLivreurposition",
  created: "2023-03-27T09:05:21.738Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["livreur", "position", { transaction }],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "livreur",
      "position",
      {
        type: Sequelize.GEOMETRY("POINT"),
        field: "position",
        comment: "Position",
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
