import express from 'express';
import * as stoneService from "../services/stone-service";
import * as boardService from "../services/board-service";

const router = express.Router();

router.get('/', async (req, res) => {
  const stone = await stoneService.getStone();
  res.status(200).json(stone);
});

router.get('/:email', async (req, res) => {
  const stone = await stoneService.getStoneList(req.params.email);
  res.status(200).json(stone);
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
    sympathyAngry,
    sympathyFunny,
    sympathyGloomy,
    sympathyShameful,
    tag,
  } = req.body;
  try {
    const stone = await stoneService.createStone({
      title,
      content,
      writer,
      angry,
      funny,
      gloomy,
      shameful,
      sympathyAngry,
      sympathyFunny,
      sympathyGloomy,
      sympathyShameful,
      tag,
    });
    res.status(201).set("Content-Location", `/stone/${stone}`).json({
      msg: "success",
    });
  } catch (e) {
    console.error(e);
  }
});
export default router;
