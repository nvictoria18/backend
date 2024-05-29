import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { User } from "src/users/users.model";
import { Task } from "./tasks.model";

@Table({tableName: 'user_tasks', createdAt: false, updatedAt: false})
export class UserTasks extends Model<UserTasks> {

  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Task)
  @Column({type: DataType.INTEGER})
  taskId: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;
}