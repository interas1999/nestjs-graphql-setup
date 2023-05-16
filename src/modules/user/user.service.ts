import { Injectable } from '@nestjs/common'
import { UserRepository } from './repositories/user.repository'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async listAdminUsers() {
    return await this.userRepository.listAdminUsers()
  }
}
