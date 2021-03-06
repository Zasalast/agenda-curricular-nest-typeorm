import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../models/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ActivityEntity } from '../../models/activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature( [UserEntity,ActivityEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
