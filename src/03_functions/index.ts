/**
 * =========================================================
 * MODULE 03: TypeScript Functions
 * =========================================================
 * This file teaches how to properly type functions, including
 * optional args, rest params, and function overloading.
 */

console.log("🚀 Starting Module 03: Functions...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Basic Function Formatting
 * ---------------------------------------------------------
 * You must define the type of inputs, and optionally the output.
 */
{
  console.log("--- PART 1: Function Input & Output ---");

  function addNumbers(a: number, b: number): number {
    return a + b;
  }

  console.log("Adding 5 + 3 =", addNumbers(5, 3));
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 2: Optional Parameters (?)
 * ---------------------------------------------------------
 * By adding a `?` after an argument name, it becomes optional.
 */
{
  console.log("--- PART 2: Optional Parameters ---");

  function greet(name: string, title?: string): string {
    if (title) {
      return `Hello, ${title} ${name}!`;
    }
    return `Hello, ${name}!`;
  }

  console.log(greet("Ajay Keshri"));       // Called without the optional argument
  console.log(greet("Ajay Keshri", "Mr.")); // Called with the optional argument
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 3: Default Parameters
 * ---------------------------------------------------------
 * You can assign default values if an argument isn't provided.
 */
{
  console.log("--- PART 3: Default Parameters ---");

  function welcome(city: string = "Delhi"): string {
    return `Welcome to ${city}!`;
  }

  console.log(welcome());         // Defaults to Delhi
  console.log(welcome("Mumbai")); // Overwrites default
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 4: Rest Parameters (...args)
 * ---------------------------------------------------------
 * Rest parameters gather multiple extra arguments into an array.
 */
{
  console.log("--- PART 4: Rest Parameters ---");

  // Takes an infinite amount of trailing numbers and dumps them in an array
  function sumAll(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  console.log("Summing 10, 20, 30 =", sumAll(10, 20, 30));
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 5: Function Overloading
 * ---------------------------------------------------------
 * Defining multiple signature declarations for a single function.
 */
{
  console.log("--- PART 5: Function Overloading ---");

  // Signatures:
  function formatData(value: number): string;
  function formatData(value: string): string;
  
  // Implementation:
  function formatData(value: number | string): string {
    if (typeof value === "number") {
      return `[Number Value]: ${value.toFixed(2)}`;
    }
    return `[Text Value]: ${value.toUpperCase()}`;
  }

  console.log(formatData(99.456));
  console.log(formatData("typescript is powerful"));
}

console.log("\n✅ Module 03 completed!\n");
