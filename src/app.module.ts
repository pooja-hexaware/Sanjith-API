import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { StoreModule } from './store/store.module';
import { ToppingModule } from './topping/topping.module';
import { OrderModule } from './order/order.module';
import { CouponModule } from './coupon/coupon.module';
import { ComboModule } from './combo/combo.module';
import { LoyaltyModule } from './loyalty/loyalty.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
    }),
    MenuModule,
    StoreModule,
    ToppingModule,
    OrderModule,
    CouponModule,
    ComboModule,
    LoyaltyModule,
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
