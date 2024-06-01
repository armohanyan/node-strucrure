import express from 'express';
import user from './user.api'
const app = express();
app.use('/user', user)

export default app;
