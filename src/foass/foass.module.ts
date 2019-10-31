import { FoassService } from './foass.service';
import { Module } from '@nestjs/common';
import { FoassController } from './foass.controller';

@Module({
  controllers: [FoassController],
  providers: [FoassService],
})
export class FoassModule {}
