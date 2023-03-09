const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(complement) => "repa"
 * addColumn(composition) => "repa"
 *
 */

const info = {
  revision: 4,
  name: "ajoutCompostitionrepa",
  created: "2023-03-05T12:26:47.383Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["repa", "complement", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "repa",
      "composition",
      {
        type: Sequelize.STRING,
        field: "composition",
        comment: "Composition",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["repa", "composition", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "repa",
      "complement",
      {
        type: Sequelize.BOOLEAN,
        field: "complement",
        comment: "Est complement?",
        defaultValue: false,
        allowNull: false,
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
