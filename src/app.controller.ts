import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
//import { BalanceService } from './services/balance.service';
//const { BalanceService } = require('./services/balance.service')

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }
}


