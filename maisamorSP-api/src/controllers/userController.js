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
exports.verifyToken = exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.JWT_SECRET || '_79u0T66mEWfXOiblkNAWWC-mtXjshrvl1r9QEe3pDg=';
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const adminUsername = 'admin';
    const adminPassword = '$2b$10$6wSJ8j7oeJqHpjP8DcBh1.OAHywHQxmFLsYo7Fl8Vj1RQG4XiMo8S';
    if (username === adminUsername) {
        const isMatch = yield bcrypt_1.default.compare(password, adminPassword);
        if (!isMatch) {
            return res.status(401).send('Senha incorreta');
        }
        const token = jsonwebtoken_1.default.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).send({ message: 'Login bem-sucedido', token });
    }
    return res.status(404).send('Usuário não encontrado');
});
exports.loginUser = loginUser;
const verifyToken = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(403).send('Um token é necessário para autenticação');
    }
    try {
        jsonwebtoken_1.default.verify(token, SECRET_KEY);
        next();
    }
    catch (error) {
        return res.status(401).send('Token inválido');
    }
};
exports.verifyToken = verifyToken;
