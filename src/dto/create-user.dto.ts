import {ApiProperty} from "@nestjs/swagger"

export class CreateUserDto {

  @ApiProperty({example: 'user@email.ru', description: '???'})
  readonly email: string;

  @ApiProperty({example: '1234', description: '???'})
  readonly password: string;
}