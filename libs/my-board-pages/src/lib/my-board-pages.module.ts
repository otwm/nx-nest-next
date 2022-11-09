import { Module } from '@nestjs/common';
import {T1Controller} from '../t1/t1.controller'
import {PageController} from './page/PageController'
import {PageService} from './page/PageService'

@Module({
  controllers: [T1Controller, PageController],
  providers: [PageService],
  exports: [],
})
export class MyBoardPagesModule {}
