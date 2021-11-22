import {Controller, Get} from '@nestjs/common';

@Controller('health')
export class HealthController {
    constructor(

    ) {
    }

    // GET /api/health
    @Get()
    health() {
        return {status: Date.now()};
    }

    @Get('u')
    async g() {
        console.log("fdsfssdfsd");
        return {abc: "abc"};
    }


}