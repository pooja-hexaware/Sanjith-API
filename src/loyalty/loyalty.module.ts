import { Module } from '@nestjs/common';
import { LoyaltyService } from './loyalty.service';
import { LoyaltyController } from './loyalty.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Loyalty, LoyaltySchema } from './entities/loyalty.entity';
import { LoyaltyRepo } from './loyalty.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Loyalty.name, schema: LoyaltySchema }])],
  controllers: [LoyaltyController],
  providers: [LoyaltyService, LoyaltyRepo]
})
export class LoyaltyModule {}
