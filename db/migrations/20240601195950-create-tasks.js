module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ToDos', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      tasksName: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: { notNull: true, notEmpty: true },
      },
      tasksIsCompleted: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      updatedAt: {
        defaultValue: Date.now(),
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        defaultValue: Date.now(),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('ToDos');
  },
};
