import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Admin {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({ type: "text" })
    username!: string

    @Column({ type: "text" })
    password!: string

    @Column('boolean', { default: true })
    isActive: boolean = true

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at!: Date;
}