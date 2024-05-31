import { IsBoolean, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  readonly tasksName: string;

  @IsBoolean()
  readonly tasksIsCompleted: boolean;
}
