import { IsArray, IsString } from "class-validator";

export class CreateTeamDto {
    @IsString()
    name: string;

    @IsArray()
    pokemons: [];
}
