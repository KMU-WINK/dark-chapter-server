import Sympathy from "../repositories/sympathy-repository";
import User from "../repositories/user-repository";

export async function readSympathy(boardId) {
  const sympathies = await Sympathy.find({
    boardId
  });
  return sympathies;
}

export async function createSympathy(args) {
  const {
    boardId,
    userId,
    angry,
    funny,
    gloomy,
    shameful
  } = args;
  const sympathy = new Sympathy({
    boardId,
    userId,
    angry,
    funny,
    gloomy,
    shameful
  });
  await sympathy.save();
}
