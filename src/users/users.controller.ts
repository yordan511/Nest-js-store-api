import { UsersService } from './users.service';
import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: UserDto): Promise<any> {
    this.userService.create(userDto);
  }
}
