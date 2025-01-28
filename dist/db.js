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
exports.LinkModel = exports.ContentModel = exports.TagsModel = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const tagSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true }
});
const contentSchema = new mongoose_1.default.Schema({
    link: { type: String, required: true },
    type: { type: String, required: true, enum: ['image', 'video', 'artical'] },
    title: { type: String, required: true },
    tags: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Tags' }],
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: function (value) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield exports.UserModel.findById(value);
                if (!user) {
                    throw new Error('User does not exist');
                }
            });
        }
    }
});
const linkSchema = new mongoose_1.default.Schema({
    hash: { type: String, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true }
});
exports.UserModel = mongoose_1.default.model("User", userSchema);
exports.TagsModel = mongoose_1.default.model("Tags", tagSchema);
exports.ContentModel = mongoose_1.default.model("Content", contentSchema);
exports.LinkModel = mongoose_1.default.model("Link", linkSchema);
