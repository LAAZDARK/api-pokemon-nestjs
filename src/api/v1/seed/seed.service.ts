import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { PokeResponse, PokesResponse } from './interfaces/pokemon-response.interfaces';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>
  ) {
    //
  }

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const { data } = await this.axios.get<PokesResponse>('https://pokeapi.co/api/v2/pokemon?limit=6')

    const pokemonToInsert: PokeResponse[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      // pokemonToInsert.push({ name, no })
      const { data } = await this.axios.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon/${no}`)
      await this.pokemonModel.create({
        ...data,
        no
      })
      // console.log(data)
      // pokemonToInsert.push(data)

    });

    await this.pokemonModel.insertMany(pokemonToInsert)

    return 'Execute seed';
  }
}
