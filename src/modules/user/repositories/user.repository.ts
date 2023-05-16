import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/modules/database/prisma/prisma.service'

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async listAdminUsers() {
    return await this.prisma.user.findMany({
      where: {
        isAdmin: true,
      },
    })
  }
}
