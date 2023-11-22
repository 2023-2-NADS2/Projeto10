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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertDesejo = exports.storage = exports.firebaseAdmin = exports.db = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount = require('../security/desejos-de-papel-firebase-adminsdk-6j4hr-56f60945e2.json');
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    storageBucket: 'desejos-de-papel.appspot.com'
});
exports.db = firebase_admin_1.default.firestore();
exports.firebaseAdmin = firebase_admin_1.default;
exports.storage = firebase_admin_1.default.storage();
const insertDesejo = (desejo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.db.collection('desejos').add(desejo);
        console.log('Desejo inserido com sucesso');
    }
    catch (error) {
        console.error('Erro ao inserir desejo:', error);
        throw error;
    }
});
exports.insertDesejo = insertDesejo;
