import express from 'express';
import * as userService from "../services/user-service";
// import { UserError, UserErrorCode } from "../errors/user-error";

const router = express.Router();

router.get('/:username', async (req, res) => {
  const user = await userService.readUser(req.params.username);
  res.status(200)
    .json(user);
});

router.post("/", async (req, res) => {
  const { email, username, password, nickname } = req.body;

  try {
    const userId = await userService.createUser({
      email,
      username,
      password,
      nickname,
    });
    res.status(201).set("Content-Location", `/users/${userId}`).json({
      msg: "success",
    });
  } catch (e) {
    console.error(e);
  }
});

export default router;