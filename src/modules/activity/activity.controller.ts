import { Controller, Post, Body, Response, HttpStatus, Get, Res, Param, Put, Delete } from "@nestjs/common";
import { ActivityService } from "./activity.service";
import { CreateActivityDto } from "./dto/create-activity.dto";
import { response } from "express";
import { UpdateActivityDto } from "./dto/update-activity.dto";
import { ActivityEntity } from "src/models/activity.entity";

@Controller('activity')
export class ActivityController {
    constructor(private readonly activityService: ActivityService) { }

    @Post()
    async CreateActivity(@Response() res, @Body() activity: CreateActivityDto) {
        console.log(activity)
        const response = await this.activityService.createActivity(activity)

        res.status(HttpStatus.OK).json(response);
    }
    @Get()
    async findAll(@Response() res ) {
       const response = await this.activityService.findAll();
        res.status(HttpStatus.OK).json(response);
    }

    @Get(':id') 
    async findOne(@Response() res,@Param('id') id: number ) {
       const response = await this.activityService.findOne(id);
        res.status(HttpStatus.OK).json(response);
    }

    @Get('name/:curriculumactivity') 
    async findActivityByName(@Response() res,@Param('curriculumactivity') curriculumactivity: any ) {
       const response = await this.activityService.findByNameActivity(curriculumactivity);
        res.status(HttpStatus.OK).json(response);
    }

    @Put() 
    async UpdateActivity(@Response() res,@Body() activity: UpdateActivityDto ) {
       const response = await this.activityService.UpdateActivity(activity);
        res.status(HttpStatus.OK).json(response);
    }


    @Delete(':id') 
    async Delete(@Response() res,@Param('id') id: number ) {
       const response = await this.activityService.Delete(id);
        res.status(HttpStatus.OK).json(response);
    }
}