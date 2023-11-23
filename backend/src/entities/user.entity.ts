import { 
  Entity, 
  Column, 
  Unique,
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Conversation } from "./conversation.entity";

@Entity({ name: "users"})
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column()
  public first_name: string

  @Column()
  public last_name: string

  @Column()
  public email: string 

  @Column({
    type: "text"
  })
  public password: string

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

  @OneToMany(() => Conversation, (conversation) => conversation.user)
  conversations: Conversation[]
}