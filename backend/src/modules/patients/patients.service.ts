import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'src/entities/patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientRepo: Repository<Patient>
  ){}

  async createPatient(payload: Partial<Patient>): Promise<Patient> {
    const patient = this.patientRepo.create({
      user: payload.user,
      conversation_number: 0
    });

    await this.patientRepo.save(patient);

    return patient
  }

  async fetchPatientById(id: string): Promise<Patient> {
    const patient = await this.patientRepo.findOneBy({ id })

    return patient
  }

  async updatePatient(id:string, payload: Partial<Patient>): Promise<Patient> {
    await this.patientRepo.update({ id: id }, payload);
    
    return await this.patientRepo.findOneBy({ id })
  }
}
