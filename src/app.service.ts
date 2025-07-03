import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getGayResponse() : string{
    console.log('yesssirir')
    return 'Hella gay bro'
  }

}
