import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Prompt } from "./prompt.entity";

@Entity({ name: "conversations" })
export class Conversation {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({ type: 'int' })
  cycles_number: number

  
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

  @OneToMany(() => Prompt, (prompt) => prompt.conversation)
  prompts: Prompt[]

  @ManyToOne(() => User, (user) => user.conversations)
  @JoinColumn({ name: "user_id" })
  user: User
} 