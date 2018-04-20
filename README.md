<h1 align="center">React-Serialize</h1>
<p align="center">Serialize and deserialize React components to JSON</p>

<table><tr><td>

```js
serialize(
  <div>
    <h1 align="center">
      <blink>Hello</blink>
    </h1>
  </div>
)
```

</td><td>⇄</td><td>

```js
deserialize({
  type: "div",
  props: {
    children: {
      type: "h1",
      props: {
        align: "center",
        children: { type: "blink", props: { children: "Hello" } }
      }
    }
  }
})
```

</td></tr></table>

## Install

```sh
npm i pravdomil/react-serialize
```

## Usage

See [CodeSandbox example](https://codesandbox.io/embed/github/pravdomil/react-serialize/tree/master/example?expanddevtools=1).

## API

See [src/index.js](src/index.js).

## Donate
[By buying a beer](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BCL2X3AFQBAP2&item_name=react-serialize%20Beer).
