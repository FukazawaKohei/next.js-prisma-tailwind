import { PrismaClient } from '@prisma/client'

export class PrismaLib {
  private static client: PrismaClient

  public static get instance(): PrismaClient {
    if (!this.client) {
      this.client = new PrismaClient()
    }
    return this.client
  }
}
