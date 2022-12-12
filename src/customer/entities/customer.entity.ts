import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
    _id?: string;
    @Prop()
    name: string;
    @Prop()
    street: string;
    @Prop()
    postalCode: string;
    @Prop()
    city: string;
    @Prop()
    phone: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);