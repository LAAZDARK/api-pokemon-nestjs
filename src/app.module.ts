import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './api/v1/auth/auth.module';
import { TeamModule } from './api/v1/team/team.module';
import { PokemonModule } from './api/v1/pokemon/pokemon.module';
import { SeedModule } from './api/v1/seed/seed.module';

@Module({
  imports: [
    AuthModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/api-pokemon'),
    MongooseModule.forRoot('mongodb+srv://m001-student:7FBKWX2FByD5Jiq0@sandbox.fjaqu.mongodb.net/m001'),
    TeamModule,
    PokemonModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  //
}
