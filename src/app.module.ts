import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpinionsController } from './opinions/opinions.controller';
import { OpinionsService } from './opinions/opinions.service';
import { FoassService } from './foass/foass.service';
import { FoassController } from './foass/foass.controller';
import { FoassModule } from './foass/foass.module';

@Module({
  imports: [FoassModule],
  controllers: [AppController, OpinionsController, FoassController],
  providers: [AppService, OpinionsService, FoassService],
})
export class AppModule {}
