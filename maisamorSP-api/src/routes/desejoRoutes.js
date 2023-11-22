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
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const desejoController_1 = require("../controllers/desejoController");
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, desejoController_1.selectTodosDesejos)(req, res);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
router.post('/', userController_1.verifyToken, upload.single('imagem'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, desejoController_1.createDesejo)(req, res);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
router.put('/:id', userController_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, desejoController_1.updateDesejo)(req, res);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
router.delete('/:id', userController_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, desejoController_1.deleteDesejo)(req, res);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.default = router;
