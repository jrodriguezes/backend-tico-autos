import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: { createdAt: true, updatedAt: false } })
export class User {
  @Prop({ required: true, unique: true })
  numberid: number;

  @Prop({ required: true })
  name: string;

  // Importante: que NO salga en respuestas por defecto
  @Prop({ required: true, select: false })
  passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
