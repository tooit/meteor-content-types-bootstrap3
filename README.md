# Meteor Content Types

Extend [tooit:content-types]() package with the Bootstrap 3.x theme.

We did not include dependencies for any Boostrap package so you need to decide the best integration that fits for your app (LESS, CSS, etc.).

## Install

```bash
meteor add tooit:content-types-bootstrap3
```

## Usage

The [tooit:content-types]() package already has a template abstraction layer so you just need to specify "theme: bootstrap3" in any content type setup.

Following the base example from [tooit:content-types]() README.md:

```javascript
BooksCT = new ContentType({
  collection:       Books,
  ctid:             "book",
  theme:            "bootstrap3" // This line will let your content type to use the Bootstrap 3 theme.
});
```

Happy coding! :)
