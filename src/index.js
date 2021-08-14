import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/user-routers';
import sympathyRouter from './routers/sympathy-routers';

// const dbadress="mongodb+srv://sowish:sowon123@cluster0.ddlov.mongodb.net/test";
const app = express();
const port = 8000;

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

app.use(express.json());

app.use('/users', userRouter);
app.use('/sympathy', sympathyRouter);

app.listen(port, () => {
  console.log(`running server at http://127.0.0.1:${port}`);
});
  