import User from "../repositories/user-repository";
import { UserErrorCode, UserError } from '../errors/user-error';

export async function readUser(email) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new UserError(UserErrorCode.NotFound);
  }

  const userInfo = Object
    .entries(user._doc)
    .filter((item) => item[0] !== 'password')
    .map(([key, value]) => ({ [key]: value }))
    .reduce((x, y) => ({ ...x, ...y }));

  return userInfo || null;
}

export async function createUser(args) {
  const {
    email,
    password,
    nickname,
  } = args;
  const existUser = await User.findOne({
    $or: [{ email }, { nickname }],
  });
  if (!existUser) {
    const user = new User({
      email,
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


export async function updateUser(args) {
  const user = await User.findOne({ email });
  if (user) {
    Object.entries(args)
      // eslint-disable-next-line array-callback-return
      .map(([key, value]) => {
        if (value) {
          user[key] = value;
        }
      });
    user.save();
  } else {
    throw new UserError(UserErrorCode.NotFound);
  }
}

export async function deleteUser(email) {
  const user = await User.findOneAndDelete({ email });
  if (!user) {
    throw new UserError(UserErrorCode.NotFound);
  }
}
