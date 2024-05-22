import { Module } from '@nestjs/common';
import { RolesController } from './tasks.controller';
import { RolesService } from './tasks.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tasks } from './tasks.model';
import { UserRoles } from './user-tasks.model';
import { User } from 'src/users/users.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
