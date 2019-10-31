import { Injectable } from '@nestjs/common';
import Axios from 'axios';

export interface Message {
  message: string;
  subtitle: string;
}

@Injectable()
export class FoassService {
  async messageToAnyone(): Promise<Message> {
    let response = await Axios.get('off/Tom/Everyone', {
      baseURL: 'https://foaas.com/',
      headers: {
        Accept: 'application/json',
      },
    });
    if (response) {
      return response.data;
    } else {
      return {
        message: `Smile or cry - you will die`,
        subtitle: 'Wise man',
      };
    }
  }
}
