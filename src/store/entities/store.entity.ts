import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type StoreDocument = HydratedDocument<Store>;

@Schema()
export class Store {
    _id?: string;
    @Prop()
    name: string;
    @Prop()
    address: string;
    @Prop()
    zip: string;
    @Prop()
    city: string;
    @Prop()
    state: string;
    @Prop()
    storePhone: string;
    @Prop()
    kitchenPhone: string;
    @Prop()
    distance: number;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }] })
    menuItems: string[];
}

export const StoreSchema = SchemaFactory.createForClass(Store);