import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
/* eslint-disable @typescript-eslint/no-unsafe-call */
export class UpdateUserDto extends PartialType(CreateUserDto) {}
