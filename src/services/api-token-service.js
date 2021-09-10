import jwt from 'jsonwebtoken';
import userRepository from '../repositories/user-repository';
import { UserError, UserErrorCode } from '../errors/user-error';

const API_SECRET_KEY = "alw4kjtiw3jfedk323irjflkdjldakgjewi58";

export async function getToken(args) {
    const { email, password } = args;
    const user = await userRepository.findOne({ email });
    if (user) {
        const token = await jwt.sign({
            email: user.email,
        }, API_SECRET_KEY, {
            expiresIn: '7d',
            // issuer: 'domain',
            subject: 'userInfo',
        });
        return token;
        }
    throw new UserError(UserErrorCode.NotFound);
}
