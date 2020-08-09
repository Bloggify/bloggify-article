## Documentation

You can see below the API reference of this module.

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

