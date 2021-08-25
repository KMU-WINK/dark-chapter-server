import Sympathy from "../repositories/sympathy-repository";
import User from "../repositories/user-repository";

export async function readSympathy(username) {
  const user = await User.findOne({
      username
  });

  const sympathies = await Sympathy.find({
      userId: user._id
  });
  return sympathies;
}

export async function createSympathy(args) {
  const {
    angry,
    funny,
    gloomy,
    shameful
  } = args;
  const sympathy = new Sympathy({
    angry,
    funny,
    gloomy,
    shameful
  });
  await sympathy.save();
}
