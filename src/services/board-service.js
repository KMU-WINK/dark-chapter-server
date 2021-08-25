import Board from "../repositories/board-repository";

export async function createBoard(args) {
    const {
        title,
        content,
        angry,
        funny,
        gloomy,
        shameful,
        depth,
        isPrivate,
        tag,
    } = args;
    const board = new Board({
        title,
        content,
        // createdAt,
        // writer: user._id,
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
