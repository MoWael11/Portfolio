"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articlesController_1 = require("../controllers/articlesController");
const router = (0, express_1.Router)();
router.route('/')
    .get(articlesController_1.getAllArticles)
    .post(articlesController_1.createArticle)
    .put(articlesController_1.updateArticle)
    .delete(articlesController_1.deleteArticle);
exports.default = router;
