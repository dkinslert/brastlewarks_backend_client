"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BrastlewarksController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const gnomes = yield database_1.default.query('SELECT * FROM gnome');
            res.json(gnomes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const gnome = yield database_1.default.query('SELECT * FROM gnome WHERE id = ?', [id]);
            console.log(gnome.length);
            if (gnome.length > 0) {
                return res.json(gnome[0]);
            }
            res.status(404).json({ text: "in the gnome this gnome doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO gnome set?', [req.body]);
            res.json({ message: 'Gnome Saved ' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGnome = req.body;
            yield database_1.default.query('UPDATE gnome set ? WHERE id = ?', [req.body]);
            res.json({ message: "The Gnome was updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM gnome WHERE id = ? ', [id]);
            res.json({ message: "The gnome was deleted" });
        });
    }
}
;
const brastlewarksController = new BrastlewarksController;
exports.default = brastlewarksController;
