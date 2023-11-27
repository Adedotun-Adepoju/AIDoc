import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation } from 'src/entities/conversation.entity';
import { Prompt } from 'src/entities/prompt.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Conversation)
    private conversationRepo: Repository<Conversation>,

    @InjectRepository(Prompt)
    private promptRepo: Repository<Prompt>,
    private usersService: UsersService
  ){}

  async createConversation(payload: any): Promise<Conversation> {
    const user = await this.usersService.findUserById(payload.user_id)

    if(!user){
      throw new Error('User does not exist')
    }

    const conversation = this.conversationRepo.create({
      title: payload.title,
      cycles_number: 0,
      user
    })

    await this.conversationRepo.save(conversation)

    await this.createPrompt({
      conversation_id: conversation.id,
      role: "user",
      content: payload.title
    })

    const newConversation = await this.conversationRepo.findOneBy({ id: conversation.id})
    return newConversation
  } 

  async fetchConversationsByUser(userId: string): Promise<Conversation[]>{
    const user = await this.usersService.findUserById(userId)

    if(!user){
      throw new Error("User does not exist")
    }

    const conversations = await this.conversationRepo.find({
      where: {
        user_id: userId
      }
    })

    return conversations
  }

  async createPrompt(payload: any): Promise<Prompt> {
    const conversation = await this.conversationRepo.findOneBy({
      id: payload.conversation_id
    })

    if(!conversation){
      throw new Error("Conversation does not exist")
    }

    const prompt = this.promptRepo.create({
      role: payload.role,
      content: payload.content,
      conversation
    })

    await this.promptRepo.save(prompt)

    const newPrompt = await this.promptRepo.findOneBy({ id: prompt.id })
    return newPrompt
  }

  async fetchPromptsByConversation(conversationId: string): Promise<Prompt[]>{
    const conversation = await this.conversationRepo.findOneBy({
      id: conversationId
    })

    if(!conversation){
      throw new Error("Conversation does not exist")
    }

    const prompts = await this.promptRepo.find({
      where: {
        conversation_id: conversationId
      },
      order: {
        created_at: 'ASC'
      }
    })

    return prompts
  }
}
