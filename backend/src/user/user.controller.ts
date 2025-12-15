/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UpsertUserDto } from './dto/upsert-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // POST /user/upsert
  @Post('upsert')
  upsert(@Body() dto: UpsertUserDto) {
    return this.userService.upsert(dto);
  }

  // GET /user/by-clerk/:clerkId
  @Get('by-clerk/:clerkId')
  getByClerkId(@Param('clerkId') clerkId: string) {
    return this.userService.findByClerkId(clerkId);
  }
}
