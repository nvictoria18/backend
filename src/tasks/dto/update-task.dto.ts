import { IsBoolean,
       IsNumber,
       IsString } from 'class-validator';

       export class UpdateTaskDto {
        @IsString()
        readonly tasksName: string;
    
        @IsBoolean()
        readonly tasksIsCompleted: boolean;
    
        @IsNumber()
        readonly userId: number;
    }