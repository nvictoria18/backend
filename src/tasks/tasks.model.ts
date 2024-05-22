import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/users/users.model";
import { UserRoles } from "./user-tasks.model";

interface TasksCreationAttrs {
  value: string;
  description: string;
}

@Table({tableName: 'tasks'})
export class Tasks extends Model<Tasks, TasksCreationAttrs> {

  @ApiProperty({example: 'Do homework', description: 'Что делать?'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  tasksName: string;

  @ApiProperty({example: 'false', description: 'Сделано или нет'})
  @Column({type: DataType.BOOLEAN, allowNull: false})
  tasksIsCompleted: boolean;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}


