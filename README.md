<div align="center">

# React Serialize

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

## API

See [src/index.js](src/index.js#L1).
