import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoyaltyService } from './loyalty.service';
import { CreateLoyaltyDto } from './dto/create-loyalty.dto';
import { UpdateLoyaltyDto } from './dto/update-loyalty.dto';
import { Loyalty } from './entities/loyalty.entity';

@Controller('loyalty')
export class LoyaltyController {
  constructor(private readonly loyaltyService: LoyaltyService) {}

  @Post()
  create(@Body() loyalty: Loyalty) {
    return this.loyaltyService.create(loyalty);
  }

  @Get()
  findAll() {
    return this.loyaltyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loyaltyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedLoyalty: Loyalty) {
    return this.loyaltyService.update(id, updatedLoyalty);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loyaltyService.remove(id);
  }
}
