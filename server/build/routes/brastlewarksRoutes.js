"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brastlewarksController_1 = __importDefault(require("../controllers/brastlewarksController"));
class BrastlewarksRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', brastlewarksController_1.default.list);
        this.router.get('/:id', brastlewarksController_1.default.getOne);
        this.router.post('/', brastlewarksController_1.default.create);
        this.router.put('/:id', brastlewarksController_1.default.update);
        this.router.delete('/:id', brastlewarksController_1.default.delete);
    }
}
exports.default = new BrastlewarksRoutes().router;
