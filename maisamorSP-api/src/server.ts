import express from 'express';
import cors from 'cors';
import desejoRouter from './routes/desejoRoutes';
import userRouter from './routes/userRoutes';
import { firebaseAdmin } from './config/databaseConfig';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/desejos', desejoRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    
    if (firebaseAdmin.apps.length) {
        console.log('Conexão com o Firebase foi estabelecida com sucesso!');
    } else {
        console.error('Falha ao estabelecer conexão com o Firebase.');
    }
});
