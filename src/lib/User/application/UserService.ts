import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

// Recommended when you're the only one working in the project, or in your team all compromise not to create dependencies

export class UserService {
  constructor(private readonly repository: UserRepository) {}

  create(user: User): Promise<void> {
    return this.repository.create(user);
  }

  getAll(): Promise<User[]> {
    return this.repository.getAll();
  }
}
