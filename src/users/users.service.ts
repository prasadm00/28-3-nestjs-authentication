import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      email: 'john@yopmail.com',
      password: 'password',
    },
    {
      userId: 2,
      username: 'maria',
      email: 'maria@yopmail.com',
      password: 'password',
    },
  ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
