import { ClientError, getErrorData } from './base-error';

export const BoardErrorCode = {
    NotFound: 1,
};

export const BoardErrorData = getErrorData({
    [BoardErrorCode.NotFound]: {
        status: 404,
        message: '게시물이 존재하지 않습니다.',
    },
}, BoardErrorCode);

export class BoardError extends ClientError {
    constructor(errorCode) {
        const error = BoardErrorData[errorCode];
        super(error.message, error.status, error.code);
    }
}