import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        const userId = parseInt(id, 10);
        return this.usersService.findOne(userId);
    }

    @Post()
    create(@Body() body: { name: string, permission: string, points: number}){
        return this.usersService.create(body.name, body.permission, body.points);
    }   

    @Put(':id')
    update(@Param('id') id: string, @Body() body: { name: string, permission: string, points: number}){
        const userId = parseInt(id, 10);
        return this.usersService.update(userId, body.name, body.permission, body.points);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        const userId = parseInt(id, 10);
        return this.usersService.delete(userId);
    }

    @Post(':id/add-points')
    addPoints(@Param('id') id: string, @Body('points') points: number){
        const userId = parseInt(id, 10);
        return this.usersService.addPoints(userId, points);
    }

    @Post(':id/remove-points')
    removePoints(@Param('id') id: string, @Body('points') points: number){
        const userId = parseInt(id, 10);
        return this.usersService.removePoints(userId, points);
    }
}
