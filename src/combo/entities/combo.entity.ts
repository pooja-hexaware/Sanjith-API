import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ComboDocument = HydratedDocument<Combo>;

@Schema()
export class Combo {
    _id?: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }] })
    menuItems: string[];
    @Prop()
    discount: number;
}

export const ComboSchema = SchemaFactory.createForClass(Combo);