import express from 'express';
import './lib/dayjs';
import { successResponse } from './helpers';
import { errorMiddleware } from './middleware';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(successResponse('Welcome to the API'));
});

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
