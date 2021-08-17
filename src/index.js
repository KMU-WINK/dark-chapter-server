import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/user-routers';

const app = express();
const port = 8000;

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    sslCA: [fs.readFileSync('rds-combined-ca-bundle.pem')],
  })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));

app.use(express.json());

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`running server at http://127.0.0.1:${port}`);
});
  