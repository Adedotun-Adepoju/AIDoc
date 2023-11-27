import { Body, Controller, Param, Post, Get, UseGuards, HttpException } from '@nestjs/common';
import { ChatService } from './chat.service';
import { createConversationDto } from './dto/create-conversation.dto';
import { createPromptDto } from './dto/create-prompt.dto';
import { ResponseHelper } from 'src/helper/response.helper';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('chat')
export class ChatController {
  constructor(
    private chatService: ChatService
  ){}

  @UseGuards(JwtAuthGuard)
  @Post("/conversation")
  async createConversation(@Body() payload: createConversationDto) {
    try {
      const conversation = await this.chatService.createConversation(payload);
      return ResponseHelper.successResponse("Created succesfully", 201, conversation)
    } catch(error) {
      console.log(error)
      throw new HttpException(error.message, 404);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post("/prompt")
  async createPrompt(@Body() payload: createPromptDto) {
    try {
      const prompt = await this.chatService.createPrompt(payload);
      return ResponseHelper.successResponse("Created succesfully", 201, prompt)
    } catch(error) {
      console.log(error)
      throw new HttpException(error.message, 404);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get("/conversations/:user_id")
  async getConversationsByUser(@Param('user_id') userId: string) {
    try {
      const conversations = await this.chatService.fetchConversationsByUser(userId);
      return ResponseHelper.successResponse("Conversations fetched succesfully", 200, conversations)
    } catch(error) {
      console.log(error)
      throw new HttpException(error.message, 404);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get("/prompts/:conversation_id")
  async getPromptsByConversation(@Param('conversation_id') conversationId: string) {
    try {
      const conversations = await this.chatService.fetchPromptsByConversation(conversationId);
      return ResponseHelper.successResponse("Prompts fetched succesfully", 200, conversations)
    } catch(error) {
      console.log(error)
      throw new HttpException(error.message, 404);
    }
  }
}
