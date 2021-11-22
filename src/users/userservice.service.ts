import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersData } from './usersuser-data.interface'


@Injectable()
export class UserserviceService {
    private users: UsersData[] = [];

    constructor(@InjectModel('users') private readonly userModel: Model<UsersData>) {
    }

    async insertUsers(
        _id: string,
        firstName: string,
        lastName: string,
        address: string,
        phone: string) {
        const newUser = new this.userModel({
            firstName,
            lastName,
            address,
            phone
        });
        const result = await newUser.save();
        return result.id;
    }

    async getUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }

    // private async findUser(pid: string): Promise<UsersData> {
    //     let user;
    //     try {findUser
    //         user = await this.userModel.findOne(
    //             ({
    //                 "pid": pid
    //             })).exec();
    //     } catch (error) {
    //         throw new NotFoundException('Could not find product.');
    //     }
    //     if (!user) {
    //         throw new NotFoundException('Could not find product.');
    //     }
    //     return user;
    // }

    async getOneUserById(pid: string) {
         const user = await this.userModel.findOne(
            ({
                "pid": pid
            })).exec();
         //await this.findUser(pid);
        return {
            id: user.id,
            pid: user.pid,
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phone: user.phone,
        };
    }



    async insertNewUser(
        pid: string,
        firstName: string,
        lastName: string,
        address: string,
        phone: string) {
        const newUser = new this.userModel({
            pid,
            firstName,
            lastName,
            address,
            phone
        });
        const result = await newUser.save();
        return result.id as string;
    }





}
