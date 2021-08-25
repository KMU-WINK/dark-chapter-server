import express from "express";
import * as sympathyService from "../services/sympathy-service";

const router = express.Router();

router.get('/:username', async (req, res) => {
  const sympathy = await sympathyService.readSympathy(req.params.username);
  res.status(200)
    .json(sympathy);
});

router.post("/", async (req, res) => {
  const {
    angry,
    funny,
    gloomy,
    shameful
  } = req.body;

  try {
    const sympathy = await sympathyService.createSympathy({
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
