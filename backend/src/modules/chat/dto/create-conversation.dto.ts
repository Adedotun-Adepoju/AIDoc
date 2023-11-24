import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class createConversationDto {
  @IsString()
  @IsNotEmpty()
  user_id: string

  @IsString()
  @IsNotEmpty()
  title: string
}