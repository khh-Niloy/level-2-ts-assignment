# What is the use of the keyof keyword in TypeScript? Provide an example.

What is keyof?
keyof is a TypeScript operator that takes an object type and returns a union of its keys as string literal types.

```bash
type Person = {
    name: string;
    age: number;
    adderss: string;
}
type Properties = keyof Person //name | age | address
const obj : Properties = "name"
```

Example: Taking value from an object

```bash
const user = {
    name: "niloy",
    age: 12
}
function getProperty<T, K extends keyof T>(object: T, key: K) : T[K]{
    return object[key]
}

console.log(getProperty(user, "name")) //output: niloy
```
