import { Body,
   Controller, 
   Get, 
   Param, 
   Post, 
   Put,
  Delete} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Post()
    create(@Body() dto: CreateTaskDto) {
        return this.tasksService.createTask(dto);
    }

    @Get('/:tasksName')
    getByName(@Param('tasksName') tasksName: string) {
        return this.tasksService.getTaskByName(tasksName);
    }

    @Get('/all-tasks')
    async findAll(): Promise<Task[]> {
    return await this.tasksService.findAll();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
      return await this.tasksService.update(id, updateTaskDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
      return await this.tasksService.remove(id);
    }
}
