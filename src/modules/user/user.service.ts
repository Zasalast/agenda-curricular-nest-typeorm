import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { UserEntity } from '../../models/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
	constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

	async createUser(data: CreateUserDto): Promise<UserEntity> {
		try {
			let user = new UserEntity();
			user.name = data.name;
			user.username = data.username;
			user.password = data.password;
			user.email = data.email;
			return await this.userRepository.save(user)
		} catch (error) {
			return error
		}
	}




	async findAll(): Promise<UserEntity[]> {
		try {
			return await this.userRepository.find();
		} catch (error) {
			return error
		}
	}

	async findOne(id): Promise<UserEntity> {
		try {
			return await this.userRepository.findOne({ where: { id } });
		} catch (error) {
			return error
		}
	}

	async Delete(id: number): Promise<DeleteResult> {
		try {

			return await this.userRepository.delete(id);
		} catch (error) {
			return error
		}
	}

	async UpdateUser(data: UpdateUserDto): Promise<UserEntity> {
		try {
			let user = await this.findOne(data.id)
			user.name = data.name;
			user.username = data.username;
			user.password = data.password;
			user.email = data.email;
			return await this.userRepository.save(user)
		} catch (error) {
			return error
		}
	}

}
