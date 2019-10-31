import { FoassService, Message } from './foass.service';
import { Controller, Get, Post, Redirect, Body } from '@nestjs/common';
// import { addOpinionDto } from './dto/opinion.dto';

@Controller('foass')
export class FoassController {
  constructor(private readonly foassService: FoassService) {}

  @Get()
  async requestOpinion(): Promise<Message> {
    return await this.foassService.messageToAnyone();
  }
}
