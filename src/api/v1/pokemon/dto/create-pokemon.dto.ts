import { IsArray, IsBoolean, IsInt, IsString } from 'class-validator';
import { Ability, GameIndex, Move, Species, Stat, Type } from '../../seed/interfaces/pokemon-response.interfaces';
export class CreatePokemonDto {
  @IsString()
  name: string;

  @IsInt()
  no: number;

  @IsArray()
  abilities: Ability[];

  @IsInt()
  base_experience: number;

  @IsArray()
  forms: Species[];

  @IsArray()
  game_indices: GameIndex[];

  @IsInt()
  height: number;

  @IsArray()
  held_items: any[];

  @IsInt()
  id: number;

  @IsBoolean()
  is_default: boolean;

  @IsString()
  location_area_encounters: string;

  @IsArray()
  moves: Move[];

  @IsInt()
  order: number;

  @IsArray()
  past_types: any[];

  @IsArray()
  stats: Stat[];

  @IsArray()
  types: Type[];

  @IsInt()
  weight: number;
}
