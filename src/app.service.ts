import { Injectable } from '@nestjs/common';
import Binance, { OrderType } from 'binance-api-node';
import { ConfigService } from '@nestjs/config';
import {BinanceConfig} from "./common/configs/config.interface";

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  marginTrade(): string {
    return '';
  }

  async spotTrade(type: 'sell' | 'buy') {
    const binanceConfig = this.configService.get<BinanceConfig>('binance');
    const binanceClient = Binance({
      apiKey: binanceConfig.apiKey,
      apiSecret: binanceConfig.apiSecret,
    });

    return await binanceClient.order({
      symbol: 'XRPUSDT',
      side: type.toUpperCase() as 'SELL' | 'BUY',
      type: OrderType.MARKET,
      quantity: '900',
    });
  }
}
