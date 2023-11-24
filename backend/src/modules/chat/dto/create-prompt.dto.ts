import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class createPromptDto {
  @IsString()
  @IsNotEmpty()
  conversation_id: string

  @IsString()
  @IsNotEmpty()
  role: string

  @IsString()
  @IsNotEmpty()
  content: string
}