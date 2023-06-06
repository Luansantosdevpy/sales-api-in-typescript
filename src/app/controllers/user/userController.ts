import { Request, Response } from 'express';
import { UserRepository } from '../../../repositories/user/userRepository';

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userRepository.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}