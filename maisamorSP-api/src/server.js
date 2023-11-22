"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const desejoRoutes_1 = __importDefault(require("./routes/desejoRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const databaseConfig_1 = require("./config/databaseConfig");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/desejos', desejoRoutes_1.default);
app.use('/users', userRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    if (databaseConfig_1.firebaseAdmin.apps.length) {
        console.log('Conexão com o Firebase foi estabelecida com sucesso!');
    }
    else {
        console.error('Falha ao estabelecer conexão com o Firebase.');
    }
});
