"use strict";

const BloggifyPage = require("bloggify-page")
    , Daty = require("daty")
    , stringTemplate = require("string-template")
    ;

/**
 * bloggifyArticle
 * The Bloggify article class.
 *
 * @name bloggifyArticle
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
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
