# `ts-assert-exists`

> Assert that a value exists – and remove `| undefined` from its type

## Install

```sh
npm install ts-assert-exists
```

## Examples

```ts
import assertExists from 'ts-assert-exists';

const twitterToken: string = assertExists(process.env.TWITTER_TOKEN);
// Type of `process.env.TWITTER_TOKEN` is `string | undefined`.
// `assertExists` will cast `process.env.TWITTER_TOKEN` to `string`
// and throw if `process.env.TWITTER_TOKEN` would be undefined.
```

or

```ts
import assertExists from 'ts-assert-exists';

const twitterToken: string = assertExists(
    process.env.TWITTER_TOKEN,
    'Twitter token does not exist',
);
// Type of `process.env.TWITTER_TOKEN` is `string | undefined`.
// `assertExists` will cast `process.env.TWITTER_TOKEN` to `string`
// and throw an error with “Twitter token does not exist”
// if `process.env.TWITTER_TOKEN` would be undefined.
```

## Why

Imagine you have a variable that might be undefined:

```ts
process.env.APP_NAME; // Has a type of `string | undefined`
```

You want to pass this variable into a function that accepts strings, but TypeScripts gives you an error:

```ts
function repeatString(str: string, count: number) {
    // ...
}

repeatString(process.env.APP_NAME, 5);
// TypeScript: type 'string | undefined' is not assignable to type 'string'
```

To work around this, you could cast the variable with as:

```ts
function repeatString(str: string, count: number) {
    // ...
}

// Don’t do this!
repeatString(process.env.APP_NAME as string, 5);
```

But what if you forget to specify this environment variable, and it turns out to be undefined? You’ll receive a cryptic runtime error – or, ever worse, a wrong value.

To avoid such issue, use this package:

```ts
function repeatString(str: string, count: number) {
    // ...
}

const definedVariable = assertExists(process.env.APP_NAME);
repeatString(definedVariable, 5);
```

## API

```ts
assertExists<Type>(value: Type | undefined, messageToThrow?: string): Type;
```

## License

MIT © [Ivan Akulov](https://iamakulov.com)
