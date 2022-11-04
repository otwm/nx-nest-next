import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MyBoardPagesModule} from '@nx-nest-next/my-board-pages'

@Module({
  imports: [MyBoardPagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
