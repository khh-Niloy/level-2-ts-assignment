function formatString(input: string, toUpper?: boolean) {
  if (toUpper || toUpper == undefined) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

type FilterRatingType = { title: string; rating: number }[];
function filterByRating(items: FilterRatingType): FilterRatingType {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

function concatenateArrays<T>(...arr: T[][]): T[] {
  return arr.flat();
}

abstract class Vehicle {
  constructor(private make: string, private year: number) {}

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  if (typeof value == "string") {
    return value.length;
  }
  return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length == 0) return null;
  return products.reduce((prev, curr) =>
    prev.price > curr.price ? prev : curr
  );
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day == Day.Sunday || day == Day.Saturday) {
    return "Weekend";
  }
  return "Weekday";
}

async function squareAsync(num: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (num < 0) {
      return reject(new Error("Error: Negative number not allowed"));
    }
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}

{
  const user = {
    name: "niloy",
    age: 12,
  };
  function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
  }

  console.log(getProperty(user, "name"));
}
