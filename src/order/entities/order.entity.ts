import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
    _id?: string;
    @Prop()
    orderedItems: Object[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);