import { validate } from "class-validator";
import { BelongsTo, 
  Column, 
  DataType, 
  Model, 
  Table } from "sequelize-typescript";

interface TaskCreationAttrs {
  tasksName: string;
  tasksIsCompleted: boolean;
}

@Table({tableName: 'tasks'})
export class Task extends Model<Task, TaskCreationAttrs> {
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, validate: {notNull: true, notEmpty:true}})
  tasksName: string;

  @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
  tasksIsCompleted: boolean;
}