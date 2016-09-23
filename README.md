
# bloggify-article

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/bloggify-article.svg)](https://www.npmjs.com/package/bloggify-article) [![Downloads](https://img.shields.io/npm/dt/bloggify-article.svg)](https://www.npmjs.com/package/bloggify-article) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

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

## :memo: Documentation


### `bloggifyArticle(a, b)`
The Bloggify article class.

#### Params
- **Number** `a`: Param descrpition.
- **Number** `b`: Param descrpition.

#### Return
- **Number** Return description.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
