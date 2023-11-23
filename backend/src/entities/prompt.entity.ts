import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Conversation } from "./conversation.entity";

@Entity({ name: "prompts" })
export class Prompt {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column('text')
  user_input: string 

  @Column('text')
  model_response: string

  @Column()
  request_type: string

  @ManyToOne(() => Conversation, (conversation) => conversation.prompts)
  @JoinColumn({ name: "conversation_id" })
  conversation: Conversation
}