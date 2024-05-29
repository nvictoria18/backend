import { IsBoolean,
       IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  tasksName: string;

  @IsBoolean()
  tasksIsCompleted: boolean;
}