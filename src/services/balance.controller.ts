import { Body, Controller, Post} from '@nestjs/common';
import { BalanceService } from './balance.service';
// import { BalanceService } from '';


@Controller('balance')
export class BalanceController {
  //constructor(private readonly appService: AppService) {}
    constructor(private readonly balanceService: BalanceService) { }
    @Post()
  async getAggregateBalances(@Body('address') address: string) {
      // Your code to get the aggregate balances goes here
      //const aggregateBalances = await this.balanceService.getAggregateBalances(address);
      const aggregateBalances = await this.balanceService.getAggregateBalances(address);
    return aggregateBalances;
  }
}
