import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ nullable: true })
  @Exclude()
  resetPasswordToken: string;

  @Column({ nullable: true })
  @Exclude()
  resetPasswordExpires: Date;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ nullable: true })
  emailVerificationToken: string;

  @Column({ nullable: true })
  emailVerificationTokenExpires: Date;

  @Column({ nullable: true })
  passwordResetToken: string;

  @Column({ nullable: true })
  passwordResetTokenExpires: Date;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true, type: 'int' })
  age: number;

  @Column({ nullable: true })
  gender: string; // 'male' | 'female' | 'other' | 'prefer_not_to_say'

  @Column({ nullable: true, type: 'date' })
  dateOfBirth: Date;

  @Column({ nullable: true })
  profilePicture: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  emergencyContactName: string;

  @Column({ nullable: true })
  emergencyContactPhone: string;

  @Column({ nullable: true })
  bloodType: string; // 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown'

  @Column({ nullable: true, type: 'text' })
  allergies: string; // comma-separated or JSON

  @Column({ nullable: true, type: 'text' })
  chronicConditions: string; // comma-separated or JSON

  @Column({ nullable: true, type: 'text' })
  currentMedications: string; // comma-separated or JSON

  @Column({ nullable: true, type: 'text' })
  medicalHistory: string;

  @Column({ nullable: true })
  preferredLanguage: string;

  @Column({ nullable: true })
  occupation: string;

  @Column({ default: false })
  onboardingComplete: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 