import { Injectable, Get, Post, Put, Delete, Options } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository, DeleteResult, Like,EntityRepository } from 'typeorm';
import { ActivityEntity } from '../../models/activity.entity'
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
 
@Injectable()
export class ActivityService {
	constructor(@InjectRepository(ActivityEntity) private readonly activityRepository: Repository<ActivityEntity>) { }

	async createActivity(data: CreateActivityDto): Promise<ActivityEntity> {
		try {
			let activity = new ActivityEntity();
			activity.curriculumactivity = data.curriculumactivity;
			activity.manager = data.manager;
			activity.date = data.date;
			activity.hour = data.hour;
			activity.priority = data.priority;
			activity.state = data.state;
			activity.description = data.description;
			return await this.activityRepository.save(activity)
		} catch (error) {
			return error
		}
	}


	async findAll(): Promise<ActivityEntity[]> {
		try {
			return await this.activityRepository.find();
		} catch (error) {
			return error
		}
	}

	async findOne(id): Promise<ActivityEntity> {
		try {
			return await this.activityRepository.findOne({ where: { id } });
		} catch (error) {
			return error
		}
	}

	async findActivity(curriculumactivity): Promise<ActivityEntity> {
		try {
			return await this.activityRepository.findOne({ where: { curriculumactivity } });
		} catch (error) {
			return error
		}
	}


	async findByNameActivity(curriculumactivityid: string)   {
		try {
			return this.activityRepository.createQueryBuilder("Activity").
			where("Activity.curriculumactivity like :curriculumactivity", 
			 { curriculumactivity:'%'+curriculumactivityid+'%'}).getRawMany()
			;
		} catch (error) {
			return error
		}
	}

	async Delete(id: number): Promise<DeleteResult> {
		try {
			return await this.activityRepository.delete(id);
		} catch (error) {
			return error
		}
	}

	async UpdateActivity(data: UpdateActivityDto): Promise<ActivityEntity> {
		try {
			let activity = await this.findOne(data.id)
			activity.curriculumactivity = data.curriculumactivity;
			activity.manager = data.manager;
			activity.date = data.date;
			activity.hour = data.hour;
			activity.priority = data.priority;
			activity.state = data.state;
			activity.description = data.description;
			return await this.activityRepository.save(activity)
		} catch (error) {
			return error
		}
	}
}
