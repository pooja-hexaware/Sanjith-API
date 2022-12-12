import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type MenuDocument = HydratedDocument<Menu>;

@Schema()
export class Menu {
    _id?: string;
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    price: number;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topping' }] })
    toppings: string[];
}

export const MenuSchema = SchemaFactory.createForClass(Menu);