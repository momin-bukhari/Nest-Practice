import {IsInt, IsString, Min} from 'class-validator'

export class CreateUserDto {
    @IsString()
    name: string;

    @IsInt()
    @Min(18)
    age: number;
}