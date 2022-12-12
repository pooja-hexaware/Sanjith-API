import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CouponDocument = HydratedDocument<Coupon>;

@Schema()
export class Coupon {
    _id?: string;
    @Prop()
    name: string;
    @Prop()
    discount: number;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);