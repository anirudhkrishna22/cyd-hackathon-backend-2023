import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BalanceModule } from './services/balance.module';

@Module({
  imports: [SharedModule, BalanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
