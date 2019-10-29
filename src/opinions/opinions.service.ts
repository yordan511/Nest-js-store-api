import { Injectable } from '@nestjs/common';
import { Opinion } from './interfaces/opinion.interface';

@Injectable()
export class OpinionsService {
  private readonly opinions: Opinion[] = [];

  create(opinion: Opinion) {
    this.opinions.push(opinion);
  }

  findAll(): Opinion[] {
    return this.opinions;
  }
}
