import Board from "../repositories/board-repository";
import User from "../repositories/user-repository";
import { UserError, UserErrorCode } from '../errors/user-error';
import { BoardError, BoardErrorCode } from "../errors/board-error";

export async function getBoard(boardId) {
    const board = await Board.findOne({ _id: boardId });
    if (board) {
        return board;
    }
    throw new BoardError(BoardErrorCode.NotFound);
}

export async function getBoardListAll() {
    const board = await Board.find();
    if (board) {
        return board;
    }
    throw new BoardError(BoardErrorCode.NotFound);
}

export async function getBoardList(email) {
    const user = await User.findOne({ email });
    const board = await Board.find({writer : user._id});
    if (board) {
        return board;
    }
    throw new BoardError(BoardErrorCode.NotFound);
}

export async function createBoard(args) {
    const {
        title,
        content,
        writer,
        angry = 0,
        funny = 0,
        gloomy = 0,
        shameful = 0,
        depth,
        isPrivate,
        tag,
    } = args;
    const board = new Board({
        title,
        content,
        writer,
        angry,
        funny,
        gloomy,
        shameful,
        depth,
        isPrivate,
        tag,
    });
    await board.save();
}

export async function updateBoard(
    boardId,
    title,
    content,
    angry,
    funny,
    gloomy,
    shameful,
    depth,
    isPrivate,
    tag,
) {
    const board = await Board.findOne({ _id: boardId });
    await Board.findOneAndUpdate({
        _id: boardId,
    }, {
        ...(title) && { title },
        ...(content) && { content },
        ...(angry) && { angry },
        ...(funny) && { funny },
        ...(gloomy) && { gloomy },
        ...(shameful) && { shameful },
        ...(depth) && { depth },
        ...(isPrivate) && { isPrivate },
        ...(tag) && { tag },
    });
}

export async function deleteBoard(boardId) {
    //const board = await Board.findOne({ _id: boardId });
    await Board.findOneAndDelete({
        _id: boardId,
    });
}
