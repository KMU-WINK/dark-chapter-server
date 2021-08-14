import Sympathy from "../repositories/sympathy-repository";

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
