import 'class-validator';
import { IsString, IsEmail, MaxLength, MinLength, IsNumberString } from 'class-validator';
export class UpdateUserDto{
    @IsNumberString()
    readonly id: number

    @IsString()
    readonly name: string

    @IsString()
    @MaxLength(15, {message:"Su nombre de usuario no puede tener tantos caracteres"})
    @MinLength(8, {message:"Su nombre de usuario es  muy corto"})
	readonly username: string
    
    @IsString()
    readonly password: string
    
    @IsEmail()
	readonly email: string
}