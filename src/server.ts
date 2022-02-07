import express, {Request, Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
//Main Models
import usuarioRoutes from './routes/usuario'
import categoriaRoutes from './routes/categoria'
import refeicaoRoutes from './routes/refeicao'
import alimentoRoutes from './routes/alimento'
import vitaminaRoutes from './routes/vitamina'
//Junction Models
import refeicao_alimentoRoutes from './routes/refeicao_alimento'
import alimento_vitaminaRoutes from './routes/alimento_vitamina'

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
server.use(categoriaRoutes)
server.use(refeicaoRoutes)
server.use(alimentoRoutes)
server.use(vitaminaRoutes)
//Junction Table routes
server.use(refeicao_alimentoRoutes)
server.use(alimento_vitaminaRoutes)


//Endpoints básicos do servidor
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado!'});
})

//recuperando o arquivo com as variáveis de ambiente
server.listen(process.env.PORT);