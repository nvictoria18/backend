import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  HttpCode,
  Patch,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  @HttpCode(201)
  createTask(@Body() dto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(dto);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Task[]> {
    return await this.tasksService.findAll();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Patch('/:id')
  @HttpCode(200)
  async updateTask(
    @Param('id') id: number,
    @Body() dto: UpdateTaskDto,
  ): Promise<Task> {
    return await this.tasksService.updateTask(id, dto);
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteTask(@Param('id') id: number): Promise<number> {
    return await this.tasksService.deleteTask(id);
  }
}
