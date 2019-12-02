import 'class-validator';
import { IsString, IsBoolean, IsDate, IsOptional, IsDateString, IsBooleanString, IsNumber, IsNumberString } from 'class-validator';
export class UpdateActivityDto{
    @IsNumberString()
    readonly id: number

    @IsString()
    readonly curriculumactivity: string

    @IsString()
    readonly manager: string

    @IsString()
    readonly date: string

    @IsString()
    readonly hour: string

    @IsString()
    @IsOptional()
    readonly priority: string
    
    @IsBooleanString()
    @IsOptional()
    readonly state: boolean
    
    @IsString()
	readonly description: string
}