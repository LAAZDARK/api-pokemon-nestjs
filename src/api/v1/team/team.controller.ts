import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Post()
  @UseGuards(AuthGuard())
  create(@Request() req, @Body() createTeamDto: CreateTeamDto) {
    const user = req.user;
    return this.teamService.create(createTeamDto, user);
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll(@Request() req) {
    const user = req.user;
    return this.teamService.findAll(user);
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(id, updateTeamDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return this.teamService.remove(id);
  }
}
