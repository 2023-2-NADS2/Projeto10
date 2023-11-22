import { Request, Response } from 'express';
import { db, storage } from '../config/databaseConfig';

export const createDesejo = async (req: Request, res: Response) => {
    const { nomeCrianca, desejo, idade, regiao } = req.body;
    const atendido = false;
    const imagem = req.file;

    try {
        let urlImagem = "";

        if (imagem) {
            const bucket = storage.bucket();
            const file = bucket.file(imagem.originalname);
            const stream = file.createWriteStream({
                metadata: { contentType: imagem.mimetype },
            });

            const uploadPromise = new Promise((resolve, reject) => {
                stream.on('error', (error) => reject(error));
                stream.on('finish', async () => {
                    await file.makePublic();
                    urlImagem = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
                    resolve(urlImagem);
                });
            });
            stream.end(imagem.buffer);

            await uploadPromise;
        }

        const docRef = await db.collection('desejos').add({ nomeCrianca, desejo, idade, regiao, atendido, urlImagem });
        res.status(201).send({ id: docRef.id, nomeCrianca, desejo, idade, regiao, atendido, urlImagem });
    } catch (error) {
        console.error('Erro ao criar desejo:', error);
        res.status(500).send('Erro ao criar desejo');
    }
};

export const selectTodosDesejos = async (req: Request, res: Response) => {
    try {
        const desejosSnapshot = await db.collection('desejos').get();
        const desejos = desejosSnapshot.docs.map((doc: FirebaseFirestore.QueryDocumentSnapshot) => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(desejos);
    } catch (error) {
        console.error('Erro ao obter desejos:', error);
        res.status(500).send('Erro ao obter desejos');
    }
};

export const updateDesejo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        await db.collection('desejos').doc(id).update(updateData);
        res.status(200).send({ id, ...updateData });
    } catch (error) {
        console.error('Erro ao atualizar desejo:', error);
        res.status(500).send('Erro ao atualizar desejo');
    }
};

export const deleteDesejo = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await db.collection('desejos').doc(id).delete();
        res.status(200).send({ id });
    } catch (error) {
        console.error('Erro ao deletar desejo:', error);
        res.status(500).send('Erro ao deletar desejo');
    }
};
