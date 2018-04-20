import React from "react"

export function serialize(element) {
  const replacer = (key, value) => {
    switch (key) {
      case "_owner":
      case "_store":
      case "ref":
        return
      default:
        return value
    }
  }

  return JSON.stringify(element, replacer)
}

export function deserialize(data, opt) {
  if (typeof data === "string") {
    data = JSON.parse(data)
  }
  if (typeof data === "object") {
    return deserializeElement(data, opt)
  }
  throw new Error("Deserialization error")
}

function deserializeElement(element, opt = {}, key) {
  let { components = {}, reviver } = opt

  if (typeof element !== "object") {
    return element
  }

  if (element === null) {
    return element
  }

  if (element instanceof Array) {
    return element.map((el, i) => deserializeElement(el, opt, i))
  }

  // Now element has following shape { type: string, props: object }

  let { type, props } = element

  if (typeof type !== "string") {
    throw new Error("Element type must be string")
  }

  type = components[type] || type.toLowerCase()

  if (props.children) {
    props.children = deserializeElement(props.children, opt)
  }

  if (reviver) {
    ;({ type, props, key, components } = reviver(type, props, key, components))
  }

  return React.createElement(type, { ...props, key })
}
