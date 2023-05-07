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
exports.deleteArticle = exports.updateArticle = exports.createArticle = exports.getAllArticles = void 0;
const Article_1 = __importDefault(require("../models/Article"));
const User_1 = __importDefault(require("../models/User"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
// @desc Get all articles
// @route GET /articles
// @access Private
exports.getAllArticles = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get articles from database
    const articles = yield Article_1.default.find().lean();
    if (!(articles === null || articles === void 0 ? void 0 : articles.length)) {
        res.status(400).json({ message: 'No articles found' });
    }
    console.log(articles);
    const articlesWithAdmin = yield Promise.all(articles.map((article) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(article);
        const admin = yield User_1.default.findById(article.admin).lean().exec();
        console.log(admin);
        return Object.assign(Object.assign({}, article), { username: admin.username });
    })));
    res.json(articlesWithAdmin);
}));
// @desc Create new article
// @route POST /articles
// @access Private
exports.createArticle = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, admin, description } = req.body;
    if (!title || !content || !admin || !description) {
        res.status(400).json({ message: 'All fields are required' });
    }
    const duplicate = yield Article_1.default.findOne({ title }).lean().exec();
    if (duplicate) {
        res.status(409).json({ message: 'Duplicate article title' });
    }
    const article = yield Article_1.default.create({ title, content, admin, description });
    if (article) {
        res.status(201).json({ message: 'Article created' });
    }
    else {
        res.status(400).json({ message: 'Invalid article data received' });
    }
}));
// @desc Update article
// @desc PATCH /articles 
// @access Private
exports.updateArticle = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, content, admin, description, completed } = req.body;
    if (!id || !title || !content || !admin || !description || typeof completed !== 'boolean') {
        res.status(400).json({ message: 'All fields are required' });
    }
    const article = yield Article_1.default.findById(id).exec();
    if (!article) {
        res.status(400).json({ message: 'Article not found' });
    }
    const duplicate = yield Article_1.default.findOne({ title }).lean().exec();
    if (duplicate && (duplicate === null || duplicate === void 0 ? void 0 : duplicate._id.toString()) !== id) {
        res.status(409).json({ message: 'Duplicate article title' });
    }
    article.title = title;
    article.content = content;
    article.admin = admin;
    article.description = description;
    article.completed = completed;
    const updatedArticle = yield article.save();
    res.json({ message: 'Article updated' });
}));
// @desc Delete article
// @desc  DELETE /articles
// @access Private
exports.deleteArticle = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id) {
        res.status(400).json({ message: 'Article ID required' });
    }
    const article = yield Article_1.default.findById(id).exec();
    if (!article) {
        res.status(400).json({ message: 'Article not found' });
    }
    const result = yield article.deleteOne();
    const reply = `Article ${article.title} with ID ${result._id} deleted`;
    res.json(reply);
}));
