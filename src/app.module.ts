import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpinionsController } from './opinions/opinions.controller';
import { OpinionsService } from './opinions/opinions.service';
import { FoassService } from './foass/foass.service';

@Module({
  imports: [],
  controllers: [AppController, OpinionsController],
  providers: [AppService, OpinionsService, FoassService],
})
export class AppModule {}
