# `ts-assert-exists`

> Assert that a value exists – and remove `| undefined` from its type

## What it does

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

## Install

```sh
npm install ts-assert-exists
```

## Examples

```ts
import assertExists from 'ts-assert-exists';

const twitterToken = assertExists(process.env.TWITTER_TOKEN);
// or
const twitterToken = assertExists(
    process.env.TWITTER_TOKEN,
    'Twitter token does not exist',
);
```

## API

```ts
assertExists<Type>(value: Type | undefined, messageToThrow?: string): Type;
```

## License

MIT © [Ivan Akulov](https://iamakulov.com)
