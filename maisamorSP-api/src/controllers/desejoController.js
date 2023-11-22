"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDesejo = exports.updateDesejo = exports.selectTodosDesejos = exports.createDesejo = void 0;
const databaseConfig_1 = require("../config/databaseConfig");
const createDesejo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nomeCrianca, desejo, idade, regiao } = req.body;
    const atendido = false;
    const imagem = req.file;
    try {
        let urlImagem = "";
        if (imagem) {
            const bucket = databaseConfig_1.storage.bucket();
            const file = bucket.file(imagem.originalname);
            const stream = file.createWriteStream({
                metadata: { contentType: imagem.mimetype },
            });
            const uploadPromise = new Promise((resolve, reject) => {
                stream.on('error', (error) => reject(error));
                stream.on('finish', () => __awaiter(void 0, void 0, void 0, function* () {
                    yield file.makePublic();
                    urlImagem = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
                    resolve(urlImagem);
                }));
            });
            stream.end(imagem.buffer);
            yield uploadPromise;
        }
        const docRef = yield databaseConfig_1.db.collection('desejos').add({ nomeCrianca, desejo, idade, regiao, atendido, urlImagem });
        res.status(201).send({ id: docRef.id, nomeCrianca, desejo, idade, regiao, atendido, urlImagem });
    }
    catch (error) {
        console.error('Erro ao criar desejo:', error);
        res.status(500).send('Erro ao criar desejo');
    }
});
exports.createDesejo = createDesejo;
const selectTodosDesejos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const desejosSnapshot = yield databaseConfig_1.db.collection('desejos').get();
        const desejos = desejosSnapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
        res.status(200).send(desejos);
    }
    catch (error) {
        console.error('Erro ao obter desejos:', error);
        res.status(500).send('Erro ao obter desejos');
    }
});
exports.selectTodosDesejos = selectTodosDesejos;
const updateDesejo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = req.body;
    try {
        yield databaseConfig_1.db.collection('desejos').doc(id).update(updateData);
        res.status(200).send(Object.assign({ id }, updateData));
    }
    catch (error) {
        console.error('Erro ao atualizar desejo:', error);
        res.status(500).send('Erro ao atualizar desejo');
    }
});
exports.updateDesejo = updateDesejo;
const deleteDesejo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield databaseConfig_1.db.collection('desejos').doc(id).delete();
        res.status(200).send({ id });
    }
    catch (error) {
        console.error('Erro ao deletar desejo:', error);
        res.status(500).send('Erro ao deletar desejo');
    }
});
exports.deleteDesejo = deleteDesejo;
