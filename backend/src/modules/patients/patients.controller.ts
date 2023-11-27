import { Controller, HttpException, Param, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { ResponseHelper } from 'src/helper/response.helper';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('patients')
export class PatientsController {
  constructor(
    private patientsService: PatientsService
  ){}
  
  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  async fetchPatientById(@Param('id') id: string): Promise<object> {
    try {
      const { status, message, data } = await this.patientsService.fetchPatientById(id)
      return ResponseHelper.successResponse(message, 200, data)
    } catch(error){
      console.log(error)
      return ResponseHelper.errorResponse(error.message, 404, [])
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch("/:id")
  async updatePatientRecord(@Param('id') id:string, @Body() payload:any): Promise<object> {
    try {
      const { status, message, data } = await this.patientsService.updatePatient(id, payload)
      return ResponseHelper.successResponse(message, 200, data)
    } catch(error){
      console.log(error)
      return ResponseHelper.errorResponse(error.message, 404, [])
    }
  }
}
