import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "User",
})
export default class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100,
    })
    email!: string;
}
