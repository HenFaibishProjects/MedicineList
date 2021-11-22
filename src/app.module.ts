import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './features/health/health/health.controller';
import { UserserviceService } from './users/userservice.service';
import {UsersModule} from "./users/users.module";
import { MedicineService } from './medicine/medicine.service';
import { MedicineController } from './medicine/medicine.controller';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';


@Module({
  imports: [UsersModule,MongooseModule.forRoot(
      'mongodb+srv://hen:1234@cluster0.5onie.mongodb.net/medicine?retryWrites=true&w=majority')],
  controllers: [AppController, HealthController, MedicineController, LoginController],
  providers: [AppService, MedicineService, LoginService],
})
export class AppModule {}
