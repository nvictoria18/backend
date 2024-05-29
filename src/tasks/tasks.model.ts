import { BelongsTo, 
  Column, 
  DataType, 
  ForeignKey, 
  Model, 
  Table } from "sequelize-typescript";

import { User } from "src/users/users.model";

interface TaskCreationAttrs {
  tasksName: string;
  tasksIsCompleted: boolean;
  userId: number;
}

@Table({tableName: 'tasks'})
export class Task extends Model<Task, TaskCreationAttrs> {
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  tasksName: string;

  @Column({type: DataType.BOOLEAN, allowNull: false})
  tasksIsCompleted: boolean;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @BelongsTo(() => User)
  author: User;
}