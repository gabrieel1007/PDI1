import { Injectable } from '@nestjs/common';
import { permission } from 'process';

@Injectable()
export class UsersService {
    public users = [
        {id: 1, name: 'Capitão America', permission: 'admin', points: 100},
        {id: 2, name: 'Homem de Ferro', permission: 'user', points: 50},
        {id: 3, name: 'Thor', permission: 'user', points: 75},
        {id: 4, name: 'Hulk', permission: 'user', points: 25},
        {id: 5, name: 'Gavião Arqueiro', permission: 'user', points: 10},
    ];

    findAll() {
        return this.users;
    }

    findOne(id: number){
        return this.users.find(user => user.id === id);
    }

    create(name: string, permission: string, points: number){
        const newUser = {
            id: this.users.length + 1,
            name,
            permission,
            points
        };
        this.users.push(newUser);
        
        return newUser;
    }

    update(id: number, name:string, permission: string, points: number){
        const user =  this.findOne(id);
        if(user){
            name ? user.name = name : user.name;
            permission ? user.permission = permission : user.permission;
            points ? user.points = points : user.points;
        };
        return user;
    }

    delete(id: number){
        const index = this.users.findIndex(user => user.id === id);
        const user = this.findOne(id);

        if(index !== -1){
            this.users.splice(index, 1);
        }
        
        return user;
    }

    addPoints(id: number, points: number){
        const user = this.findOne(id);
        if(user){
            user.points += points;
        }
    
        return user;
    }

    removePoints(id: number, points: number){
        const user = this.findOne(id);
        if(user){
            user.points -= points;
        }

        return user;
    }
}
