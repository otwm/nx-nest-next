import {Controller, Get, Req, Res} from '@nestjs/common';
import {PageService} from './PageService'

@Controller('/')
export class PageController {
  constructor(private PageService: PageService) {}

  @Get('home')
  public async showHome(@Req() req: Request, @Res() res: Response) {
    await this.PageService.handler(req, res);
  }

  @Get('_next*')
  public async assets(@Req() req: Request, @Res() res: Response) {
    await this.PageService.handler(req, res);
  }

  @Get('favicon.ico')
  public async favicon(@Req() req: Request, @Res() res: Response) {
    await this.PageService.handler(req, res);
  }
}
