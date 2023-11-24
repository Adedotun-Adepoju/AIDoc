import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { PatientsService } from '../patients/patients.service';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private patientService: PatientsService
  ){}

  async findUserById(id: string): Promise<User> {
    const user = await this.userRepo.findOneBy({ id })

    return user
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepo.findOne({
      where: {
        email: email
      }
    })

    return user
  }

  async createUser(firstName:string, lastName:string, email: string, pass) {
    const user = this.userRepo.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: pass
    })

    await this.userRepo.save(user)

    // Create patient record
    await this.patientService.createPatient({ user })

    return {
      id: user.id,
      first_name: firstName,
      last_name: lastName,
      email: email,
    }
  }
}
