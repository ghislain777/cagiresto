const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(photo) => "livreur"
 *
 */

const info = {
  revision: 16,
  name: "modifLivreurphotodefault",
  created: "2023-03-27T06:37:08.852Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "livreur",
      "photo",
      {
        type: Sequelize.STRING,
        field: "photo",
        defaultValue: "photolivreur/avatar_livreur.png",
        comment: "Photo",
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
      "livreur",
      "photo",
      {
        type: Sequelize.STRING,
        field: "photo",
        comment: "Photo",
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
