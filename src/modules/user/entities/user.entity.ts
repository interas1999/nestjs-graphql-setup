import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  email: string

  password: string

  @Field({ nullable: true })
  isAdmin: boolean

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
