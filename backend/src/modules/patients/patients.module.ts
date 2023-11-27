import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from 'src/entities/patient.entity';
import { PatientsController } from './patients.controller';
import { Conversation } from 'src/entities/conversation.entity';
import { Prompt } from 'src/entities/prompt.entity';
@Module({
  providers: [PatientsService],
  imports: [ TypeOrmModule.forFeature([Patient, Conversation, Prompt])],
  exports: [PatientsService],
  controllers: [PatientsController]
})
export class PatientsModule {}
