import { User } from "../entities/User";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import argon2 from "argon2";
import validateRegisterInfo from "../utils/validateRegisterInfo";
import { ContextType } from "src/ContextType";

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: ContextType): Promise<User | undefined> {
    return User.findOne({ id: req.session.userId });
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { req }: ContextType
  ): Promise<UserResponse> {
    const errors = validateRegisterInfo(username, password);
    if (errors) {
      return errors;
    }
    const hashedPassword = await argon2.hash(password);
    let user: User | undefined;
    try {
      user = await User.create({
        username: username,
        password: hashedPassword,
      }).save();
    } catch (err) {
      if (err.detail.includes("already exists")) {
        return {
          errors: [
            {
              field: "username",
              message: "that username already exists",
            },
          ],
        };
      }
    }
    req.session.userId = user!.id;
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { req }: ContextType
  ): Promise<UserResponse> {
    const user = await User.findOne({
      username,
    });
    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "user not found",
          },
        ],
      };
    }
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password",
          },
        ],
      };
    }
    req.session.userId = user.id;
    return { user };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: ContextType) {
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        res.clearCookie("qid");
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      });
    });
  }
}
