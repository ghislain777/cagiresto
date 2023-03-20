const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(tempsdepreparation) => "repa"
 * addColumn(disponible) => "repa"
 *
 */

const info = {
  revision: 10,
  name: "ajoutdisponiblerepas",
  created: "2023-03-20T11:31:42.708Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "repa",
      "tempsdepreparation",
      {
        type: Sequelize.STRING,
        field: "tempsdepreparation",
        comment: "Temps de préparation",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "repa",
      "disponible",
      {
        type: Sequelize.STRING,
        field: "disponible",
        comment: "Disponibles?",
        defaultValue: true,
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["repa", "tempsdepreparation", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["repa", "disponible", { transaction }],
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
