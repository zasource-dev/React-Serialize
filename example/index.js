import React from "react"
import { serialize, deserialize } from "react-serialize"

const input = <p>Hello</p>
console.log("input", input)

const json = serialize(input)
console.log("json", json)

const output = deserialize(json)
console.log("output", output)
