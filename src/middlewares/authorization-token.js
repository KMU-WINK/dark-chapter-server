import jwt from 'jsonwebtoken';
import * as userService from '../services/user-service';
import { UserError, UserErrorCode } from '../errors/user-error';

const API_SECRET_KEY = "alw4kjtiw3jfedk323irjflkdjldakgjewi58";

export const tokenChecker = async (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split('Bearer ')[1];
        try {
            const { email } = await jwt.verify(token, API_SECRET_KEY);
            const user = await userService.readUser(email);
            req.context = {
                user,
            };
        } catch (e) {
            next();
        }
    }
    next();
};

export const authedMember = async (req, res, next) => {
    if (req.context && req.context.user) {
        next();
    } else {
        throw new UserError(UserErrorCode.NotAuthorizationHeader);
    }
};
