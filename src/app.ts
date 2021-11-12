import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares';
import db from './db';
import { Partner } from './types';
import { nanoid } from 'nanoid';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/partners', (req, res) => {
  const { firstname, lastname, shopname, shopemailaddress } = req.body;

  return db<Partner>('partners')
    .insert({
      id: nanoid(),
      firstname,
      lastname,
      shopname,
      shopemailaddress,
    })
    .then((newPartner) => {
      return res.json({
        partner: newPartner,
      });
    });
});

app.get('/api/partners', (req, res) => {
  return db<Partner>('partners')
    .select('*')
    .then((partners) => {
      return res.json({ partners });
    });
});

app.use(errorHandler);

export default app;
