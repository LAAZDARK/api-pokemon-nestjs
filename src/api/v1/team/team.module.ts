import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './entities/team.entity';

@Module({
  controllers: [TeamController],
  providers: [TeamService],
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: Team.name,
        schema: TeamSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class TeamModule { }
