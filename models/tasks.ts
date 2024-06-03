import { Column, DataType, Model, Table } from 'sequelize-typescript';
import Sequelize from 'sequelize';
import dbConfig from '../db/config/database.js';

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  },
);

interface TaskCreationAttrs {
  tasksName: string;
  tasksIsCompleted: boolean;
}

@Table({ tableName: 'taskModels' })
export class Task extends Model<Task, TaskCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: { notNull: true, notEmpty: true },
  })
  tasksName: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  tasksIsCompleted: boolean;
}
