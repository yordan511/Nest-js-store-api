import { Injectable } from '@nestjs/common';
import Axios from 'axios';

export interface Message {
  message: string;
  subtitle: string;
}

@Injectable()
export class FoassService {
  async messageToAnyone() {
    let message: Message = await Axios.get('off/Tom/Everyone', {
      baseURL: 'https://foaas.com/',
    });
    return message;
  }
}
