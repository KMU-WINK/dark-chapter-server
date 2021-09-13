import mongoose from "mongoose";
import { collectName } from "../config/db-config";

const stoneSchema = new mongoose.Schema(
  {
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
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
    sympathyAngry: {
      type: Number,
    },
    sympathyFunny: {
      type: Number,
    },
    sympathyGloomy: {
      type: Number,
    },
    sympathyShameful: {
      type: Number,
    },
    tag: [String],
  },
  {
    timestamps: true,
  }
);

const stoneRepository = mongoose.model(collectName.Stone, stoneSchema);
export default stoneRepository;
