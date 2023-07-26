import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectDBServer } from './config/db';
import { routerUser } from './route/user';

/**
 * Cria a aplicação
 */
export const app = express();

/**
 * Libera o acesso aos serviços
 */
app.use(cors());

/**
 * Permite receber e enviar JSON
 */
app.use(bodyParser.json());

/**
 * Configura os logs
 */
app.use(logger('dev'));


/**
 * Conecta no BD
 */
connectDBServer();

/**
 * Configuração de rotas
 */

app.use('/user', routerUser);
app.use('/', (req, res) => res.send('API do app UserForm'));

