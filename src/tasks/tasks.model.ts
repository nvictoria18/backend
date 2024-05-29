import { BelongsToMany, 
  Column, 
  DataType, 
  Model, 
  Table } from "sequelize-typescript";

import { User } from "src/users/users.model";
import { UserTasks } from "./user-tasks.model";
import { ApiProperty } from "@nestjs/swagger";

interface TaskCreationAttrs {
  tasksName: string;
  tasksIsCompleted: boolean;
}

@Table({tableName: 'tasks'})
export class Task extends Model<Task, TaskCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unique'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Do washing car', description: 'What to do?'})
  @Column({type: DataType.STRING, allowNull: false})
  tasksName: string;

  @ApiProperty({example: 'Done', description: 'Or not?'})
  @Column({type: DataType.BOOLEAN, allowNull: false})
  tasksIsCompleted: boolean;

  @BelongsToMany(() => User, () => UserTasks)
  users: User[];
}