import { Test, TestingModule } from '@nestjs/testing';
import { FoassService } from './foass.service';

describe('FoassService', () => {
  let service: FoassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoassService],
    }).compile();

    service = module.get<FoassService>(FoassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
