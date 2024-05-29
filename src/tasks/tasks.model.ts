import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";

import { User } from "src/users/users.model";
import { UserTasks } from "./user-tasks.model";

interface TaskCreationAttrs {
  tasksName: string;
  tasksIsCompleted: boolean;
}

@Table({tableName: 'tasks'})
export class Task extends Model<Task, TaskCreationAttrs> {

  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique:true, allowNull: false})
  tasksName: string;

  @Column({type: DataType.BOOLEAN, allowNull: false})
  tasksIsCompleted: boolean;

  @BelongsToMany(() => User, () => UserTasks)
  users: User[];
}