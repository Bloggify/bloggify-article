"use strict";

const BloggifyArticle = require("../lib");

let home = new BloggifyArticle({
    title: "Hello World!"
  , content: "Hey there!"
  , main_image: "/foo.png"
  , author: "Johnny"
  , id: 10
  , url: "/blog/{id}-{slug}"
});

console.log(home);
// BloggifyArticle {
//   title: 'Hello World!',
//   slug: 'hello-world',
//   url: '/blog/10-hello-world',
//   content: 'Hey there!',
//   raw_content: 'Hey there!',
//   main_image: '/foo.png',
//   id: 10,
//   author: 'Johnny',
//   date: null }
