import mongoose from "mongoose";
import { collectName } from '../config/db-config';

const boardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
    depth: {
        type: Number,
        required: true,
    },
    isPrivate: {
        type: Boolean,
    },
    tag: [String],
    },
    {
    timestamps: true,
    },
);

const boardRepository = mongoose.model(collectName.Board, boardSchema);
export default boardRepository;