import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Species, Sprites, Stat, Type } from "../../seed/interfaces/pokemon-response.interfaces";

@Schema()
export class Pokemon extends Document {
    @Prop()
    name: string;

    @Prop()
    no: number;

    @Prop()
    abilities: [];

    @Prop()
    base_experience: number;

    @Prop()
    forms: [];

    @Prop()
    game_indices: [];

    @Prop()
    height: number;

    @Prop()
    held_items: any[];

    @Prop()
    id: number;

    @Prop()
    is_default: boolean;

    @Prop()
    location_area_encounters: string;

    @Prop()
    moves: [];

    @Prop()
    order: number;

    @Prop()
    past_types: any[];

    @Prop()
    stats: Stat[];

    @Prop()
    types: Type[];

    @Prop()
    weight: number;
}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon);