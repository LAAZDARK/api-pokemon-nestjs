import { Pokemon } from './../../pokemon/entities/pokemon.entity';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
import { User } from '../../auth/entities/user.entity';

@Schema()
export class Team extends Document {
    @Prop()
    name: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.Number, ref: 'Pokemon' }] })
    pokemons: Pokemon[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop({ default: new Date() })
    createdAt: Date;

    @Prop({ default: new Date() })
    updatedAt: Date;

}

export const TeamSchema = SchemaFactory.createForClass(Team)