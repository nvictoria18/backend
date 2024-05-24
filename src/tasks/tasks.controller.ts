import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

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
}
