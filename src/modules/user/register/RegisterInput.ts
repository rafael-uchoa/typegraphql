import { InputType, Field } from 'type-graphql';
import { Length, IsEmail } from 'class-validator';

import { IsEmailAlreadyExist } from './isEmailAlreadyExist';

@InputType()
class RegisterInput {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Length(1, 255)
  @Field()
  lastName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: 'Email already in use' })
  email: string;

  @Field()
  password: string;
}

export default RegisterInput;
