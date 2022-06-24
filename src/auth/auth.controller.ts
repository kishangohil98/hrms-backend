import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post()
  auth(@Body() body: LoginDto): string {
    return `Auth POST route ${JSON.stringify(body)}`;
  }

  @Get('/:userId')
  getUser(@Param('userId') userId: string): string {
    return `Auth GET route: ${userId}`;
  }
}
