import express from 'express';
import * as boardService from "../services/board-service";
import { UserError, UserErrorCode } from '../errors/user-error';

const router = express.Router();

router.get('/:boardId', async (req, res) => {
    const board = await boardService.getBoard(req.params.boardId);
    res.status(200).json(board);
});

router.post('/', async (req, res) => {
    const {
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
    } = req.body;

    try {
        const board = await boardService.createBoard({
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
        res.status(201).set("Content-Location", `/board/${board}`).json({
            msg: "success",
        });
    } catch (e) {
        console.error(e);
    }
});

router.patch('/:boardId', async (req, res) => {
    const board = await boardService.getBoard(req.params.boardId);
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
    } = req.body;
    await boardService.updateBoard(
        board._id,
        title,
        content,
        angry,
        funny,
        gloomy,
        shameful,
        depth,
        isPrivate,
        tag,
    );
    res.status(200).json({
        msg: 'success',
    });
});

router.delete('/:boardId', async (req, res) => {
    const board = await boardService.getBoard(req.params.boardId);
    await boardService.deleteBoard(
        //req.context.user,
        req.params.boardId,
    );
    res.status(200).json({
        msg: 'success',
    });
});

export default router;