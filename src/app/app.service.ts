import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div style="text-align: center">Hello from Nest<div>';
  }
}
