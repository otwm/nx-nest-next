import { Module } from '@nestjs/common';
import {T1Controller} from '../t1/t1.controller'

@Module({
  controllers: [T1Controller],
  providers: [],
  exports: [],
})
export class MyBoardPagesModule {}
