import express from "express";
import * as sympathyService from "../services/sympathy-service";

const router = express.Router();

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
