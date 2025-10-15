import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Get Hello
  getHello(): string {
    return 'Welcome to the Nest JS World!';
  }
}
