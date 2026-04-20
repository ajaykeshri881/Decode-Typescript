/**
 * =========================================================
 * MODULE 01: TypeScript Basics
 * =========================================================
 * This file contains part-wise explanations of basic types.
 * Each part is enclosed in its own block `{}` so variables
 * don't conflict. Run this file to see the output!
 */

console.log("🚀 Starting Module 01: Basics...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Basic Types (String, Number, Boolean)
 * ---------------------------------------------------------
 * The most common types you will use every day.
 */
{
  const studentName: string = "Ajay Keshri";
  const studentAge: number = 18;
  const likesCoding: boolean = true;

  console.log("--- PART 1: Basic Types ---");
  console.log(`Name: ${studentName} (Type: string)`);
  console.log(`Age: ${studentAge} (Type: number)`);
  console.log(`Loves Coding?: ${likesCoding} (Type: boolean)\n`);
}

/**
 * ---------------------------------------------------------
 * PART 2: Any vs Unknown
 * ---------------------------------------------------------
 * `any` disables type checking (use rarely).
 * `unknown` forces you to check the type before using it (safer).
 */
{
  console.log("--- PART 2: Any vs Unknown ---");

  // 'any' allows anything, but it's dangerous!
  let anythingValue: any = "Hello";
  anythingValue = 99; // TypeScript won't complain
  console.log("any value:", anythingValue);

  // 'unknown' is safe because you must check its type
  let safeUnknown: unknown = "typescript is awesome";

  if (typeof safeUnknown === "string") {
    // Inside this block, TypeScript knows `safeUnknown` is a string!
    console.log("unknown after check:", safeUnknown.toUpperCase());
  }
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 3: Void Types
 * ---------------------------------------------------------
 * `void` means a function doesn't return anything.
 */
{
  console.log("--- PART 3: Void Function ---");

  function sayHi(name: string): void {
    console.log(`Hi, ${name}! I return nothing (void).`);
  }

  sayHi("Ajay");
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 4: Null and Undefined
 * ---------------------------------------------------------
 * Exactly like JavaScript, but you can explicitly type them.
 */
{
  console.log("--- PART 4: Null & Undefined ---");

  let emptyValue: null = null;
  let notReadyYet: undefined = undefined;

  console.log("Null value:", emptyValue);
  console.log("Undefined value:", notReadyYet);
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 5: Type Inference vs Type Annotation
 * ---------------------------------------------------------
 * TypeScript is smart enough to guess your types most of the time!
 */
{
  console.log("--- PART 5: Inference vs Annotation ---");

  // 1. Type Inference (TypeScript guesses the type automatically)
  let city = "Delhi"; // TS infers this is a 'string'
  let year = 2026;    // TS infers this is a 'number'

  // 2. Type Annotation (You explicitly tell TS the type)
  let hobby: string = "Programming";

  console.log(`City: ${city}, Year: ${year}, Hobby: ${hobby}`);
}

console.log("\n✅ Module 01 completed!\n");
