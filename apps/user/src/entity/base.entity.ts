import { classToPlain } from 'class-transformer';
import { BaseEntity, CreateDateColumn } from 'typeorm';
import { PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export default abstract class Entity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  toJSON() {
    return classToPlain(this);
  }
}
