import { Test, TestingModule } from '@nestjs/testing';
import { FoassController } from './foass.controller';

describe('Foass Controller', () => {
  let controller: FoassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoassController],
    }).compile();

    controller = module.get<FoassController>(FoassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
