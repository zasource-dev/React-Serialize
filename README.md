<div align="center">

# React serialize

serialize and deserialize React components to JSON

</div>

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
npm i react-serialize
```

## Example

See [CodeSandbox](https://codesandbox.io/embed/github/pravdomil/react-serialize/tree/master/example?expanddevtools=1).

## API

See [src/index.js](src/index.js#L1).

## Donate

[By buying a beer](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BCL2X3AFQBAP2&item_name=react-serialize%20Beer).
