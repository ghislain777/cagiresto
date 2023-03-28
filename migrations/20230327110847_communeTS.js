const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(updatedAt) => "commune"
 * removeColumn(createdAt) => "commune"
 * removeColumn(updatedAt) => "prixlivraison"
 * removeColumn(createdAt) => "prixlivraison"
 *
 */

const info = {
  revision: 22,
  name: "communeTS",
  created: "2023-03-27T11:08:47.042Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["commune", "updatedAt", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["commune", "createdAt", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["prixlivraison", "updatedAt", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["prixlivraison", "createdAt", { transaction }],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "commune",
      "updatedAt",
      { type: Sequelize.DATE, field: "updatedAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "commune",
      "createdAt",
      { type: Sequelize.DATE, field: "createdAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "prixlivraison",
      "updatedAt",
      { type: Sequelize.DATE, field: "updatedAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "prixlivraison",
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
