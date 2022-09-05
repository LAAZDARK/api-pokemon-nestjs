import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
  ) {
    //
  }

  async create(createPokemonDto: CreatePokemonDto) {
    const pokemon = new this.pokemonModel(createPokemonDto);
    pokemon.save();
    return pokemon;
  }

  async findAll() {
    const pokemons = await this.pokemonModel.find();
    return pokemons;
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.pokemonModel.findById(id);

    if (!pokemon) throw new NotFoundException(`Pokemon with id ${id} not found`);

    await pokemon.updateOne(updatePokemonDto, { new: true })
    return pokemon;
  }

  async remove(id: string) {
    const pokemon = await this.pokemonModel.findById(id);

    if (!pokemon) throw new NotFoundException(`Pokemon with id ${id} not found`);

    pokemon.deleteOne(pokemon._id)

    return pokemon;
  }
}
