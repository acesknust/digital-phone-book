import { Entity, Column, ObjectIdColumn, ObjectId, CreateDateColumn } from 'typeorm';

@Entity()
export class Admin {
    @ObjectIdColumn()
    id!: ObjectId

    @Column({ type: "text" })
    username!: string

    @Column({ type: "text" })
    password!: string

    @Column('boolean', { default: true })
    isActive: boolean = true

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at!: Date;
}