import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || '_79u0T66mEWfXOiblkNAWWC-mtXjshrvl1r9QEe3pDg=';

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const adminUsername = 'admin';
    const adminPassword = '$2b$10$6wSJ8j7oeJqHpjP8DcBh1.OAHywHQxmFLsYo7Fl8Vj1RQG4XiMo8S';

    if (username === adminUsername) {
        const isMatch = await bcrypt.compare(password, adminPassword);
        if (!isMatch) {
            return res.status(401).send('Senha incorreta');
        }
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).send({ message: 'Login bem-sucedido', token });
    }

    return res.status(404).send('Usuário não encontrado');
};

export const verifyToken = (req: Request, res: Response, next: Function) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).send('Um token é necessário para autenticação');
    }

    try {
        jwt.verify(token, SECRET_KEY);
        next();
    } catch (error) {
        return res.status(401).send('Token inválido');
    }
};
