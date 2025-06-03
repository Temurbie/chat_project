import { IsString, MinLength } from 'class-validator'
export class register_dto{
    @IsString()
    name: string;
    @IsString()
    @MinLength(6)
    password:string;
}