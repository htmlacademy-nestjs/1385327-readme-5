import { AuthUser } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class BlogUserEntity implements AuthUser, Entity<string> {
  public id?: string;
  public email: string;
  public name: string;
  public avatarPath: string;
  public passwordHash: string;

  constructor(user: AuthUser) {
    this.populate(user)
  }

  // собирает данные из класса и возвращает их в виде простого объекта
  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      avatarPath: this.avatarPath,
      passwordHash: this.passwordHash,
    };
  }

  // заполняет текущий экземпляр `Entity` данными
  public populate(data: AuthUser): void {
    this.email = data.email;
    this.name = data.name;
    this.avatarPath = data.avatarPath;
  }
}
