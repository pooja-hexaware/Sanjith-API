import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Store, StoreSchema } from './entities/store.entity';
import { StoreRepo } from './store.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }])],
  controllers: [StoreController],
  providers: [StoreService, StoreRepo]
})
export class StoreModule { }
