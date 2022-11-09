import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MyBoardPagesModule} from '@nx-nest-next/my-board-pages'
import {PageController} from '../page/PageController'
import {PageService} from '../page/PageService'

@Module({
  imports: [],
  controllers: [PageController],
  providers: [PageService],
})
export class AppModule {}
