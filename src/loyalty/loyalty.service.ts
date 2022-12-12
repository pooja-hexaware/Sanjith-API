import { Injectable } from '@nestjs/common';
import { Loyalty } from './entities/loyalty.entity';
import { LoyaltyRepo } from './loyalty.repository';

@Injectable()
export class LoyaltyService {
  constructor(
    private readonly loyaltyRepo: LoyaltyRepo
  ) { }

  create(loyalty: Loyalty) {
    return this.loyaltyRepo.create(loyalty);
  }

  findAll() {
    return this.loyaltyRepo.findAll();
  }

  findOne(id: string) {
    return this.loyaltyRepo.findById(id);
  }

  update(id: string, updatedLoyalty: Loyalty) {
    return this.loyaltyRepo.update(id, updatedLoyalty);
  }

  remove(id: string) {
    return this.loyaltyRepo.remove(id);
  }
}
