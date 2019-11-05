import { Controller, Get, Post, Redirect, Body } from '@nestjs/common';
import { AddOpinionDto } from './dto/opinion.dto';
import { Opinion } from './interfaces/opinion.interface';
import { OpinionsService } from './opinions.service';

@Controller('opinions')
export class OpinionsController {
  constructor(private readonly opinionService: OpinionsService) {}

  @Get()
  //   @Redirect('https://nestjs.com', 301) / if we want to redirrect - we can
  async find(): Promise<Opinion[]> {
    return this.opinionService.findAll();
  }

  @Post()
  async add(@Body() dto: AddOpinionDto) {
    try {
      this.opinionService.create(dto);
      return `Success adding ${dto}`;
    } catch (e) {
      return e;
    }
  }
}
