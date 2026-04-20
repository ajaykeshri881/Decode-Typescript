/**
 * =========================================================
 * MODULE 09: Type Narrowing
 * =========================================================
 * Narrowing shrinks a broad type into a specific one.
 */

console.log("🚀 Starting Module 09: Type Narrowing...\n");

/**
 * ---------------------------------------------------------
 * PART 1: typeof Narrowing
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 1: typeof Narrowing ---");
  function printValue(value: string | number): void {
    if (typeof value === "string") {
      console.log("String value:", value.toUpperCase());
    } else {
      console.log("Number value:", value.toFixed(2));
    }
  }

  printValue("hello");
  printValue(12.456);
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 2: instanceof Narrowing
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 2: instanceof Narrowing ---");
  class Cat { meow() { return "meow"; } }
  class Dog { bark() { return "woof"; } }

  function petSound(pet: Cat | Dog): void {
    if (pet instanceof Cat) {
      console.log("Cat says:", pet.meow());
    } else {
      console.log("Dog says:", pet.bark());
    }
  }

  petSound(new Cat());
  petSound(new Dog());
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 3: Discriminated Unions
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 3: Discriminated Unions ---");
  type Circle = { kind: "circle"; radius: number };
  type Square = { kind: "square"; side: number };
  type Shape = Circle | Square;

  function getArea(shape: Shape): number {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius * shape.radius;
    }
    return shape.side * shape.side;
  }

  console.log("Circle area:", getArea({ kind: "circle", radius: 2 }).toFixed(2));
  console.log("Square area:", getArea({ kind: "square", side: 4 }));
  console.log("\n");
}

console.log("✅ Module 09 completed!\n");
