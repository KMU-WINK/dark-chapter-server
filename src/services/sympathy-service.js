import Sympathy from "../repositories/sympathy-repository";
import User from "../repositories/user-repository";

export async function readSympathy(email) {
  const user = await User.findOne({
      email
  });

  const sympathies = await Sympathy.find({
      userId: user._id
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
