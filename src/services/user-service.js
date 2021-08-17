import User from "../repositories/user-repository";

export async function createUser(args) {
  const {
    email,
    username,
    password,
    nickname,
  } = args;
  const existUser = await User.findOne({
    $or: [{ email }, { username }, { nickname }],
  });
  if (!existUser) {
    const user = new User({
      email,
      username,
      password,
      nickname,
    });
    await user.save();
    return user._id ?? null;
  }
  if (existUser.nickname === nickname) {
    throw new UserError(UserErrorCode.UserNicknameAlreadyExists);
  } else if (existUser.email === email) {
    throw new UserError(UserErrorCode.UserEmailAlreadyExists);
  } else {
    throw new UserError(UserErrorCode.UserNameAlreadyExists);
  }
}
