<<<<<<< HEAD
export class CreateTaskDto {
    readonly tasksName: string;
    readonly tasksIsCompleted: boolean;
}
=======
import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly tasksName: string;

  @IsBoolean()
  readonly tasksIsCompleted: boolean;
}
>>>>>>> 3ef687c (tasks fix v.6)
