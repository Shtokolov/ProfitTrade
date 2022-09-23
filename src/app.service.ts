import { Injectable } from '@nestjs/common';
import Binance, { OrderType } from 'binance-api-node';
import config from './common/configs/config';
import { BinanceConfig } from './common/configs/config.interface';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from './auth/password.service';
import { ConfigService } from '@nestjs/config';

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

    console.log({
      apiKey: binanceConfig.apiKey,
      apiSecret: binanceConfig.apiSecret,
    });
      console.log(type.toUpperCase())
    return await binanceClient.order({
      symbol: 'LUNCUSDT',
      side: type.toUpperCase() as 'SELL' | 'BUY',
      type: OrderType.MARKET,
      quantity: '2900000',
    });
  }
}
