import { Injectable } from '@nestjs/common';
import next from 'next'
import {NextServer} from 'next/dist/server/next'
import {resolve} from 'path';


@Injectable()
export class PageService {
  private server: NextServer;

  async onModuleInit(): Promise<void> {
    console.log(1)
    try {
      const dir = resolve(__dirname, './app');
      this.server = next({
        dev: process.env.NODE_ENV !== 'production',
        dir: '/Users/otwm/WebstormProjects/nx-nest-next/apps/my-board'
      })
      await this.server.prepare()
    } catch (e) {
      console.error(e)
    }
    console.log(2)
  }

  handler(req, res) {
    return this.server.getRequestHandler()(req, res);
  }
}
