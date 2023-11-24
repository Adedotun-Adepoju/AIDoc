import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { PatientsModule } from '../patients/patients.module';

@Module({
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User]),
    PatientsModule,
  ],
  exports: [UsersService]
})
export class UsersModule {}
