import { UserRepository } from '../../repositories/user/userRepository';
import { User } from '../../entities/user/User';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}