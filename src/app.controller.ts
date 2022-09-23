import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {Order} from "binance-api-node";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/marginTrade')
  marginTrade(@Query('type') type: string): void {

  }

  @Get('/spotTrade')
  async spotTrade(@Query('type') type: 'sell' | 'buy'): Promise<Order> {
    const order = await this.appService.spotTrade(type);
    console.log(order);
    return order
  }

}
