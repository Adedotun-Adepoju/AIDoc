import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional
} from 'class-validator';

export class createAccountDto {
  @IsString()
  first_name: string

  @IsString()
	last_name: string

  @IsEmail()
  @IsNotEmpty()
	email: string

  @IsNotEmpty()
	password: string

  @IsOptional()
	weight: string

  @IsOptional()
	genotype: string

  @IsOptional()
	blood_group: string
}