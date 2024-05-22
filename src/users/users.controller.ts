import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.model';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({summary: 'Получение всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @Get() 
  getAll() {
    return this.userService.getAllUsers(); 
  }
}