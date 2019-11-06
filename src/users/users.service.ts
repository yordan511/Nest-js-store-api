import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './dto/user.dto';

export type User = any;

export const UserSchema = new mongoose.Schema({
  userId: Number,
  username: String,
  password: String,
});

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: mongoose.Model<User>,
  ) {}
  //   constructor() {
  //     this.users = [
  //       {
  //         userId: 2,
  //         username: 'chris',
  //         password: 'secret',
  //       },
  //       {
  //         userId: 3,
  //         username: 'maria',
  //         password: 'guess',
  //       },
  //     ];
  //   }
  async create(user: UserDto): Promise<User> {
    const createdUser = new this.usersModel(user);
    return await createdUser.save();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersModel.findOne({ username });
  }
}
