import { ClientError, getErrorData } from './base-error';

export const UserErrorCode = {
  NotFound: 1,
  NotMatchedPassword: 2,
  UserNameAlreadyExists: 3,
  NotProtectedPassword: 4,
  NotAuthorizationHeader: 5,
  PermissionDenied: 6,
  BadRequest: 7,
  UserEmailAlreadyExists: 8,
  UserNicknameAlreadyExists: 9,
};

export const UserErrorData = getErrorData({
  [UserErrorCode.NotFound]: {
    status: 404,
    message: '회원이 존재하지 않습니다.',
  },
  [UserErrorCode.NotMatchedPassword]: {
    status: 404,
    message: '회원이 존재하지 않거나 패스워드가 일치하지 않습니다.',
  },
  [UserErrorCode.UserNameAlreadyExists]: {
    status: 409,
    message: '해당 아이디를 사용하는 회원이 이미 존재합니다.',
  },
  [UserErrorCode.NotProtectedPassword]: {
    status: 400,
    message: '안전한 패스워드가 아닙니다.',
  },
  [UserErrorCode.NotAuthorizationHeader]: {
    status: 401,
    message: '인증헤더가 올바르지 않습니다.',
  },
  [UserErrorCode.PermissionDenied]: {
    status: 401,
    message: '권한이 없습니다. 이메일 인증을 진행을 해주시거나, 잘못된 접근입니다.',
  },
  [UserErrorCode.BadRequest]: {
    status: 400,
    message: '잘못된 접근입니다.',
  },
  [UserErrorCode.UserEmailAlreadyExists]: {
    status: 409,
    message: '해당 이메일을 사용하는 회원이 이미 존재합니다.',
  },
  [UserErrorCode.UserNicknameAlreadyExists]: {
    status: 410,
    message: '해당 닉네임을 사용하는 회원이 이미 존재합니다.',
  },
}, UserErrorCode);


export class UserError extends ClientError {
  constructor(errorCode) {
    const error = UserErrorData[errorCode];
    super(error.message, error.status, error.code);
  }
}
