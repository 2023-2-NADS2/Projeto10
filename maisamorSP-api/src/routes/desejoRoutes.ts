import express from 'express';
import { verifyToken } from '../controllers/userController';
import { createDesejo, selectTodosDesejos, updateDesejo, deleteDesejo } from '../controllers/desejoController';
import multer from 'multer';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/', async (req, res) => {
    try {
        await selectTodosDesejos(req, res);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
});

router.post('/', verifyToken, upload.single('imagem'), async (req, res) => {
    try {
        await createDesejo(req, res);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
});

router.put('/:id', verifyToken, async (req, res) => {
    try {
        await updateDesejo(req, res);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
});

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await deleteDesejo(req, res);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
});

export default router;
