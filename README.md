
# bloggify-article

 [![Version](https://img.shields.io/npm/v/bloggify-article.svg)](https://www.npmjs.com/package/bloggify-article) [![Downloads](https://img.shields.io/npm/dt/bloggify-article.svg)](https://www.npmjs.com/package/bloggify-article)

> The Bloggify article class.

## :cloud: Installation

```sh
$ npm i --save bloggify-article
```


## :clipboard: Example



```js
const BloggifyArticle = require("bloggify-article");

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
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `bloggifyPage(data)`
BloggifyArticle
The Bloggify article class.

#### Params
- **Object** `data`: The page data:
  - `metadata` (Object):
     - `id` (String): The article id.
     - `author` (String): The article author.
     - `date` (String|Date): The article date.
  - `id` (String): The page id. If provided, has greater priority than the `metadata.id`.
  - `author` (String): The page author. If provided, has greater priority than the `metadata.author`.

Note: The `BloggifyArticle` is extended from the [`BloggifyPage`](https://github.com/Bloggify/bloggify-page) class.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bloggify-viewer`](https://github.com/Bloggify/bloggify-viewer#readme) (by Bloggify)—Connects the CRUD operations with the renderer.

## :scroll: License

[MIT][license] © [Bloggify][website]

[license]: http://showalicense.com/?fullname=Bloggify%20%3Csupport%40bloggify.org%3E%20(https%3A%2F%2Fbloggify.org)&year=2016#license-mit
[website]: https://bloggify.org
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
