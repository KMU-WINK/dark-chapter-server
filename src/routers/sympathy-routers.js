import express from "express";
import * as sympathyService from "../services/sympathy-service";

const router = express.Router();

router.get('/:boardId', async (req, res) => {
  const sympathy = await sympathyService.readSympathy(req.params.boardId);
  res.status(200)
    .json(sympathy);
});

router.post("/", async (req, res) => {
  const {
    boardId,
    userId,
    angry,
    funny,
    gloomy,
    shameful
  } = req.body;

  try {
    const sympathy = await sympathyService.createSympathy({
      boardId,
      userId,
      angry,
      funny,
      gloomy,
      shameful,
    });
    res.status(201).set("Content-Location", `/sympathy/${sympathy}`).json({
      msg: "success",
    });
  } catch (e) {
    console.error(e);
  }
});

export default router;
