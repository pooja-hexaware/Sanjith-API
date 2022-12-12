import { Injectable } from '@nestjs/common';
import { CreateToppingDto } from './dto/create-topping.dto';
import { UpdateToppingDto } from './dto/update-topping.dto';
import { Topping } from './entities/topping.entity';
import { ToppingRepo } from './topping.repository';

@Injectable()
export class ToppingService {
  constructor(
    private readonly toppingRepo: ToppingRepo
  ) { }
  create(topping: Topping) {
    return this.toppingRepo.create(topping);
  }

  findAll() {
    return this.toppingRepo.findAll();
  }

  findOne(id: string) {
    return this.toppingRepo.findById(id);
  }

  update(id: string, updateTopping: Topping) {
    return this.toppingRepo.update(id,updateTopping);
  }

  remove(id: string) {
    return this.toppingRepo.remove(id);
  }
}
