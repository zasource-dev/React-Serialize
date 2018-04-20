import React from "react"
import { serialize, deserialize } from "react-serialize"

const input = (
  <div>
    <h1 align="center">
      <blink>Hello</blink>
    </h1>
  </div>
)
console.log("input", input)

const json = serialize(input)
console.log("json", json)

const output = deserialize(json)
console.log("output", output)
