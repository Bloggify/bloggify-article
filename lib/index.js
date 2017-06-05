"use strict";

const BloggifyPage = require("bloggify-page")
    , Daty = require("daty")
    , stringTemplate = require("string-template")
    ;

/**
 * BloggifyArticle
 * The Bloggify article class.
 *
 * @name bloggifyPage
 * @function
 * @param {Object} data The page data:
 *
 *   - `metadata` (Object):
 *      - `id` (String): The article id.
 *      - `author` (String): The article author.
 *      - `date` (String|Date): The article date.
 *   - `id` (String): The page id. If provided, has greater priority than the `metadata.id`.
 *   - `author` (String): The page author. If provided, has greater priority than the `metadata.author`.
 *
 * Note: The `BloggifyArticle` is extended from the [`BloggifyPage`](https://github.com/Bloggify/bloggify-page) class.
 */
module.exports = class BloggifyArticle extends BloggifyPage {
    constructor (data) {
        super(data);
        let m = data.metadata || {};

        this.id = data.id || m.id;
        this.author = data.author || m.author;
        this.date = new Daty(m.date);

        if (!this.date.getTime()) {
            this.date = null;
        }

        this.url = stringTemplate(this.url, this);
    }
};
