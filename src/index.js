import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/user-routers';
import boardRouter from './routers/board-routers';
import sympathyRouter from './routers/sympathy-routers';
import tokenRouter from './routers/api-token-router';
import { authedMember, tokenChecker } from './middlewares/authorization-token';

const dbadress="mongodb+srv://User:tjsghks12@mongodb.8telv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(tokenChecker);

mongoose.Promise = global.Promise;
mongoose
  .connect(dbadress, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));

app.use('/api-token', tokenRouter);
app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/sympathy', sympathyRouter);

app.listen(port, () => {
  console.log(`running server at http://127.0.0.1:${port}`);
});
