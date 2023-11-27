import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'src/entities/patient.entity';
import { Repository } from 'typeorm';
import { Conversation } from 'src/entities/conversation.entity';
import { Prompt } from 'src/entities/prompt.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientRepo: Repository<Patient>,

    @InjectRepository(Conversation)
    private conversationRepo: Repository<Conversation>,

    @InjectRepository(Prompt)
    private promptRepo: Repository<Prompt>,
  ){}

  async createPatient(payload: Partial<Patient>): Promise<Patient> {
    const patient = this.patientRepo.create({
      user: payload.user,
      conversation_number: 0
    });

    await this.patientRepo.save(patient);

    return patient
  }

  async fetchPatientById(id: string) {
    const patient = await this.patientRepo.findOneBy({ id })

    if(!patient){
      throw new Error("Patient with the specified id does not exist")
    }

    const userId = patient.user_id;

    const latestConversation = await this.conversationRepo.findOne({
      where: {
        user_id: userId
      },
      order: {
        created_at: 'DESC'
      }
    })

    const latestPrompt = await this.promptRepo.findOne({
      where: {
        conversation_id: latestConversation.id
      },
      order: {
        created_at: "DESC"
      }
    })

    patient["last_chat"] = latestPrompt.created_at

    return {
      status: "success",
      message: "Patient Fetched successfully",
      data: patient
    }
  }

  async updatePatient(id:string, payload: Partial<Patient>) {
    const existingPatient = await this.patientRepo.findOneBy({ id })

    if(!existingPatient){
      throw new Error("Patient id does not exist")
    }
    await this.patientRepo.update({ id: id }, payload);

    const data= await this.patientRepo.findOneBy({ id })

    return {
      status: "success",
      message: "Patient updated successfully",
      data
    }
  }
}
