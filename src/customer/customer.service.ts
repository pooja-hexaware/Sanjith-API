import { Injectable } from '@nestjs/common';
import { CustomerRepo } from './customer.repository';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepo: CustomerRepo
  ) { }
  create(customer: Customer) {
    return this.customerRepo.create(customer);
  }

  findAll() {
    return this.customerRepo.findAll();
  }

  findOne(id: string) {
    return this.customerRepo.findById(id);
  }

  update(id: string, updatedCustomer: Customer) {
    return this.customerRepo.update(id, updatedCustomer);
  }

  remove(id: string) {
    return this.customerRepo.remove(id);
  }
}
