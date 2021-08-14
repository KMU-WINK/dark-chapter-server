import mongoose from "mongoose";
import { collectName } from '../config/db-config';

const sympathySchema = new mongoose.Schema({
	boardId: {
		type: mongoose.Schema.Types.ObjectId,
      	ref: "Board"
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
      	ref: "User"
	},
	angry: {
		type: Number,
	},
	funny: {
		type: Number,
	},
	gloomy: {
		type: Number,
	},
	shameful: {
		type: Number,
	},
},
{
	timestamps: true,
});

const sympathyRepository = mongoose.model(collectName.Sympathy, sympathySchema);
export default sympathyRepository;
