import express from 'express';

import roomRouter from './routers/Room.js';
import customerRouter from './routers/Customer.js';
import historyRouter from './routers/Booked_History.js';

const server = express();

server.use(express.json());

server.use('/rooms',roomRouter);
server.use('/customers',customerRouter);
server.use('/history',historyRouter);

const port = 5000;

server.listen(port,() =>
{
    console.log("listening on port" , port);
});