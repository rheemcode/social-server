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
exports.likePost = exports.deletePost = exports.updatePost = exports.createPost = exports.getPost = void 0;
//import PostMessage, { Connection } from "../models/postMessage.js";
const postMessage_js_1 = __importDefault(require("../models/postMessage.js"));
var num = 1;
exports.getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield postMessage_js_1.default.findAll();
        res.status(200).json(result);
    }
    catch (err) {
        res.status(404).json(err);
        console.log(err);
    }
});
exports.createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    try {
        const result = yield postMessage_js_1.default.create({
            title: post.title,
            message: post.message,
            tags: post.tags,
            likeCount: post.likeCount,
            creator: post.creator,
            selectedFile: post.selectedFile,
        });
        res.status(201).json(result);
    }
    catch (error) {
        res.status(409).json(error);
        console.log(error);
    }
});
exports.updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: _id } = req.params;
        const post = req.body;
        const postToUpdate = yield postMessage_js_1.default.checkIsvalidAndUpdate(_id, post);
        res.json(postToUpdate);
    }
    catch (e) {
        res.status(404).json(e);
    }
});
exports.deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: _id } = req.params;
        yield postMessage_js_1.default.checkIsValidAndDelete(_id);
        res.json({ message: "deleted succesfully" });
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
var a = Date();
exports.likePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: _id } = req.params;
        var updatedPost = yield postMessage_js_1.default.checkIsValidAndUpdateLike(_id);
        res.json(updatedPost);
    }
    catch (error) {
        res.json(error);
    }
});
