import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Conversation } from "./conversation.entity";

@Entity({ name: "prompts" })
export class Prompt {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column('text')
  role: string 

  @Column('text')
  content: string

  @Column('uuid')
  conversation_id: string

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public updated_at: Date;

  @ManyToOne(() => Conversation, (conversation) => conversation.prompts)
  @JoinColumn({ name: "conversation_id" })
  conversation: Conversation
}