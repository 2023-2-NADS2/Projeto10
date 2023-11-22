import admin from 'firebase-admin';
import { Desejo } from '../models/desejoModel';

const serviceAccount = require('../security/desejos-de-papel-firebase-adminsdk-6j4hr-56f60945e2.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'desejos-de-papel.appspot.com'
});

export const db = admin.firestore();
export const firebaseAdmin = admin;
export const storage = admin.storage();

export const insertDesejo = async (desejo: Desejo) => {
    try {
        await db.collection('desejos').add(desejo);
        console.log('Desejo inserido com sucesso');
    } catch (error) {
        console.error('Erro ao inserir desejo:', error);
        throw error;
    }
};
