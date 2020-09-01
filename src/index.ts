import 'reflect-metadata'
import express from 'express'
import routes from './routes'

import {createConnection} from "typeorm";


createConnection().then(connection => {
    const app = express();

    app.use(express.json());
    app.use(routes);

    app.listen(3333);
})
