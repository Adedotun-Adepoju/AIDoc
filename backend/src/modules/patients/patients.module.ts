import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from 'src/entities/patient.entity';
import { PatientsController } from './patients.controller';

@Module({
  providers: [PatientsService],
  imports: [ TypeOrmModule.forFeature([Patient])],
  exports: [PatientsService],
  controllers: [PatientsController]
})
export class PatientsModule {}
