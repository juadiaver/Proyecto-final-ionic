"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controlador_1 = __importDefault(require("../controladores/usuario.controlador"));
const usuarioRutas = (0, express_1.Router)();
usuarioRutas.get('/getDatos', usuario_controlador_1.default.prototype.getDatos);
usuarioRutas.post('/login', usuario_controlador_1.default.prototype.login);
exports.default = usuarioRutas;
