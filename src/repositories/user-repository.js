import mongoose from "mongoose";
import { collectName } from '../config/db-config';



const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		// eslint-disable-next-line
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"이메일 형식을 지켜주세요.",
		],
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	nickname: {
		type: String,
		required: true,
		unique: true,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
},
{
	timestamps: true,
});

const userRepository = mongoose.model(collectName.User, userSchema);
export default userRepository;
