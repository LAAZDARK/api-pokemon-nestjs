import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../auth/entities/user.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team.name) private readonly teamModel: Model<Team>,
  ) {
    //
  }
  async create(createTeamDto: CreateTeamDto, user: User): Promise<Team> {
    const team = new this.teamModel({
      ...createTeamDto,
      user
    });
    return team.save();
  }

  async findAll() {
    const teams = await this.teamModel.find();
    return teams;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  async update(id: string, updateTeamDto: UpdateTeamDto) {
    const team = await this.teamModel.findById(id);

    if (!team) throw new NotFoundException(`Team with id ${id} not found`);

    updateTeamDto.updatedAt = new Date();

    await team.updateOne(updateTeamDto, { new: true })
    return team;
  }

  async remove(id: string) {
    const team = await this.teamModel.findById(id);

    if (!team) throw new NotFoundException(`Team with id ${id} not found`);

    team.deleteOne(team._id)

    return team;
  }
}
