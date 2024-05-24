import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger"
import { Task } from "src/tasks/tasks.model";
import { UserTasks } from "src/tasks/user-tasks.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'user@email.ru', description: 'Почтовый адрес'})
  @Column({type: DataType.STRING, unique:true, allowNull: false})
  email: string;

  @ApiProperty({example: '1234', description: 'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;
  
  @BelongsToMany(() => Task, () => UserTasks)
  tasks: Task[];
}