/**
 * =========================================================
 * MODULE 04: Arrays & Objects
 * =========================================================
 * This file covers structured data typing in TypeScript.
 */

console.log("🚀 Starting Module 04: Arrays & Objects...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Arrays
 * ---------------------------------------------------------
 * Lists of values sharing the same type.
 */
{
  console.log("--- PART 1: Arrays ---");
  const scores: number[] = [90, 85, 100];
  const names: Array<string> = ["Ajay", "Vijay"];
  console.log("Scores:", scores);
  console.log("Names:", names, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 2: Tuples
 * ---------------------------------------------------------
 * Arrays with a fixed size and known types at specific indexes.
 */
{
  console.log("--- PART 2: Tuples ---");
  const userRecord: [number, string, boolean] = [1, "Ajay Keshri", true];
  console.log("Tuple record:", userRecord, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 3: Object Types & Readonly
 * ---------------------------------------------------------
 * Defining exact structures for objects and preventing mutation.
 */
{
  console.log("--- PART 3: Object Types ---");
  type Car = {
    readonly brand: string;
    model: string;
    year?: number; // Optional property
  };

  const myCar: Car = { brand: "Tata", model: "Nexon" };
  // myCar.brand = "Mahindra"; // ❌ Error: Cannot assign to 'brand' because it is a read-only property.
  myCar.model = "Harrier";

  console.log("Car Object:", myCar, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 4: Index Signatures
 * ---------------------------------------------------------
 * Dynamic keys when you don't know the exact property names ahead of time.
 */
{
  console.log("--- PART 4: Index Signatures ---");
  type Dictionary = {
    [key: string]: string; // Key is string, value is string
  };

  const translations: Dictionary = {
    hello: "namaste",
    world: "duniya"
  };

  console.log("Dictionary:", translations, "\n");
}

console.log("✅ Module 04 completed!\n");
