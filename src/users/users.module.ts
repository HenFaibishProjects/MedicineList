import { Module } from '@nestjs/common';
import {UserserviceService} from "./userservice.service";
import { MongooseModule } from  '@nestjs/mongoose'
import {UserSchema} from "./usersuser-data.interface";
import { UserControllerController } from './user-controller/user-controller.controller';


@Module({
    imports: [MongooseModule.forFeature([{name: 'users' , schema: UserSchema}]),
        ],
    controllers: [UserControllerController],
    providers:[UserserviceService],
    exports: [UserserviceService]

})
    export class UsersModule {

}
