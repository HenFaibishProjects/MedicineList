import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {UserserviceService} from "../userservice.service";
import {UsersData} from "../usersuser-data.interface";

@Controller('user-controller')
export class UserControllerController {
    constructor(private readonly userService: UserserviceService) {
    }

    // http://xxx/path/x/y?a=1
    @Get('path/:p1:/:p2')
    foo(@Body() reqBody, @Param('p1') p1, @Query('a') a) {

    }


    @Get()
    async getAllUsers() {
        console.log("getAllUsers");
        return this.userService.getUsers();
    }

    @Get('getone')
    async getOneUserById(@Query('pid') pid: string) {
        return this.userService.getOneUserById(pid);

    }

    @Post('insert')
    async addProduct(
        @Body('pid') pid: string,
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('address') address: string,
        @Body('phone') phone: string,

    ) {
        const newUser = await this.userService.insertNewUser(
            pid ,
            firstName ,
            lastName ,
            address ,
            phone ,
        );
        return { id: newUser };
    }



}
