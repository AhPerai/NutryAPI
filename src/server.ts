import express, {Request, Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import usuarioRoutes from './routes/usuario'

//Iniciando as variáveis de ambiente
dotenv.config();

//Criação do servidor
const server = express();

//Liberando a API
server.use(cors());

//Pasta pública
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}))

//Rotas
server.use(usuarioRoutes)

//Endpoints básicos do servidor
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado!'});
})

//recuperando o arquivo com as variáveis de ambiente
server.listen(process.env.PORT);