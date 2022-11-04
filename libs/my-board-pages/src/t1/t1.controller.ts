import {Controller, Get} from '@nestjs/common';

@Controller('t1')
export class T1Controller {
  @Get()
  tt() {
    return '123'
  }
}
