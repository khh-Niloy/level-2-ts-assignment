# What are some differences between interfaces and types in TypeScript?

Between interfaces and types in TypeScript some differences in behavior, capabilities, and use cases. Let’s go through them in detail:

## 1. Declaration and Syntax:

Interface:

```bash
interface Product{
    name: string;
    price: number;
}
```

Type:

```bash
type Product = {
    name: string;
    price: number;
}
```

## 2. Extending:

We can extend the interface by using extend. <br/>
Example: When we extend B with interface A, B takes that name property from A. Now B has name and price properties.

```bash
interface A{
    name: string;
}

interface B extends A{
    price: number;
}

const obj : B = {
    name: "check",
    price: 12
}
```

We can extend the type by using & operator. <br/>

```bash
type A = {name: string}
type B = A & {price: number}

const obj : B = {
    name: "check",
    price: 100
}
```

## 2. Merging:

Interfaces can easily be merged if redeclared. Example:

```bash
interface A{
    name: string;
}

interface A{
    price: number;
}

const obj : A = {
    name: "check"
    //shows that the price property is missing. It means A now has two properties.
}
```

Types cannot be merged this way.❌

## 3. Unions & Intersections

We can use both Unions & Intersections for type. Example:

```bash
type Status = "active" | "inactive"
type Admin = {isAdmin: boolean}
type User = {name: string}
type Person = Admin & User
```

But we can not use Intersections for Interface. Example:

```bash
interface Product{id: string | number}
```

## 4. Primitive, array and tuples

We can use type for primitive, array and tuples. Example:

```bash
inter
type Name = string
type nameList = string[]
type User = [string, number]
```

But interface is only for object shapes.
