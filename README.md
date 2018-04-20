<h1 align="center">React-Serialize</h1>
<p align="center">Serialize and deserialize React components to JSON</p>

## Install

```sh
npm i pravdomil/react-serialize
```

## Usage

```js
import React from "react"
import { serialize, deserialize } from "react-serialize"

const input = <p>Hello</p>
console.log("input", input)

const json = serialize(input)
console.log("json", json)

const output = deserialize(json)
console.log("output", output)

```

## API

See [index.js](src/index.js)

## Donate
[By buying a beer](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BCL2X3AFQBAP2&item_name=react-serialize%20Beer).
