import { getRepository } from 'typeorm';
import { User } from '../../entities/user/User';

export class UserRepository {
  private userRepository = getRepository(User);

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}