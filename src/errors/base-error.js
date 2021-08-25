// eslint-disable-next-line max-classes-per-file
export class BaseError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export class ServerError extends BaseError {
  constructor(message, status = 500) {
    super(message, status);
  }
}

export class ClientError extends BaseError {
  constructor(message = 'Bad Request', status = 400, code = 999) {
    super(message, status);
  }
}

export const getErrorData = (obj, errorCode) => {
  return Object
    .entries(obj)
    .map((item) => ({
      [item[0]]: {
        ...item[1],
        code: errorCode[errorCode[item[0]]],
      },
    }))
    .reduce((x, y) => ({
      ...x,
      ...y,
    }));
};
