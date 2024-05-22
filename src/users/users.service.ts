import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from '../tasks/dto/create-role.dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateRoleDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
