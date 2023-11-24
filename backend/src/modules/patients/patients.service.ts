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

  async fetchPatientById(id: string) {
    const patient = await this.patientRepo.findOneBy({ id })

    if(!patient){
      throw new Error("Patient with the specified id does not exist")
    }

    return {
      status: "success",
      message: "Patient Fetched successfully",
      data: patient
    }
  }

  async updatePatient(id:string, payload: Partial<Patient>) {
    await this.patientRepo.update({ id: id }, payload);

    const data= await this.patientRepo.findOneBy({ id })

    return {
      status: "success",
      message: "Patient updated successfully",
      data
    }
  }
}
