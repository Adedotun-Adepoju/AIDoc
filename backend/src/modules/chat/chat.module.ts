import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { Conversation } from 'src/entities/conversation.entity';
import { Prompt } from 'src/entities/prompt.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conversation, Prompt]),
    UsersModule,
  ],
  controllers: [ChatController],
  providers: [ChatService]
})
export class ChatModule {}
