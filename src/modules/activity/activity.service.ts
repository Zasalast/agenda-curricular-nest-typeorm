import { Injectable, Get, Post, Put, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {ActivityEntity}from '../../models/activity.entity'
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivityService{
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
		return await this.activityRepository.find();
	  }

	  async findOne(id): Promise<ActivityEntity> {
		return await this.activityRepository.findOne({where:{id}});
	  }

	async UpdateActivity(data: UpdateActivityDto): Promise<ActivityEntity> {
		try {
			let activity  =await this.findOne(data.id)
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
