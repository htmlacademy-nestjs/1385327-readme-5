import { compare, genSalt, hash } from 'bcrypt';
import { AuthUser } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { SALT_ROUNDS } from './blog-user.constant';

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

  // выполняет хеширование пароля
  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  // проверяет пароль пользователя: `true` — пароль совпадает с хешем, `false` — нет
  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
