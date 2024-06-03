import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly tasksName?: string;

  @IsBoolean()
  readonly tasksIsCompleted?: boolean = false;
}
