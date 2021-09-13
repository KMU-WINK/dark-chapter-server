import Stone from "../repositories/stone-repository";
import User from "../repositories/user-repository";


export async function getStone(stoneId) {
  try {
    const stone = await Stone.findOne({ _id: stoneId });
    if (stone) {
      return stone;
    }
  } catch (e) {
    console.log(e.response);
  }
}
export async function getStoneList(email) {
  try {
    const user = await User.findOne({ email });
    const stone = await Stone.find({writer : user._id});
    if (stone) {
      return stone;
    }
  } catch (e) {
   console.log(e.response);
  }
}
export async function createStone(args) {
  const {
    title,
    content,
    writer,
    angry = 0,
    funny = 0,
    gloomy = 0,
    shameful = 0,
    sympathyAngry = 0,
    sympathyFunny = 0,
    sympathyGloomy = 0,
    sympathyShameful = 0,
    tag,
  } = args;
  const stone = new Stone({
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
  await stone.save();
}
