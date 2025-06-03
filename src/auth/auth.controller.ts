import { Controller, Body, Post } from '@nestjs/common';
import { register_dto } from './dto/register.dto'

@Controller('auth')
export class AuthController {
    @Post('register')
    register(@Body() body: register_dto){
        console.log("register", body)
        return {
                "name": "Ali",
                "password": "123456"
                }
    }
}
