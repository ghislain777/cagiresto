const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(alias) => "adresse"
 * changeColumn(telephone) => "client"
 *
 */

const info = {
  revision: 6,
  name: "creationAliasAdresses",
  created: "2023-03-15T08:01:10.871Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "adresse",
      "alias",
      {
        type: Sequelize.STRING,
        field: "alias",
        comment: "alias",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "client",
      "telephone",
      {
        type: Sequelize.STRING,
        field: "telephone",
        comment: "Téléphone",
        allowNull: false,
        unique: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["adresse", "alias", { transaction }],
  },
  {
    fn: "changeColumn",
    params: [
      "client",
      "telephone",
      {
        type: Sequelize.STRING,
        field: "telephone",
        comment: "Téléphone",
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
