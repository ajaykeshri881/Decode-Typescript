/**
 * =========================================================
 * MODULE 07: Generics
 * =========================================================
 * Generics create reusable, type-safe components.
 */

console.log("🚀 Starting Module 07: Generics...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Generic Functions
 * ---------------------------------------------------------
 * Use `<T>` to pass types as variables.
 */
{
  console.log("--- PART 1: Generic Functions ---");
  function identity<T>(value: T): T {
    return value;
  }
  
  console.log("Number identity:", identity<number>(42));
  console.log("String identity:", identity<string>("TS is awesome"), "\n");
}

/**
 * ---------------------------------------------------------
 * PART 2: Generic Interfaces
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 2: Generic Interfaces ---");
  interface Box<Type> {
    contents: Type;
  }
  
  const stringBox: Box<string> = { contents: "Hello Box" };
  const numberBox: Box<number> = { contents: 999 };
  
  console.log("String box:", stringBox.contents);
  console.log("Number box:", numberBox.contents, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 3: Constraints
 * ---------------------------------------------------------
 * Limit what types can be passed to a Generic using `extends`.
 */
{
  console.log("--- PART 3: Generic Constraints ---");
  interface HasLength {
    length: number;
  }
  
  // T must have a .length property!
  function logLength<T extends HasLength>(item: T): void {
    console.log(`Length is: ${item.length}`);
  }
  
  logLength("Hello");       // Works (string has length)
  logLength([1, 2, 3]);     // Works (array has length)
  // logLength(123);        // ❌ Error: Number doesn't have length
  console.log("\n");
}

console.log("✅ Module 07 completed!\n");
