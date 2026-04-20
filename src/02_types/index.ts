/**
 * =========================================================
 * MODULE 02: TypeScript Types
 * =========================================================
 * This file introduces core TypeScript concepts like Union,
 * Literal, Intersection types, and Enums.
 */

console.log("🚀 Starting Module 02: Types...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Union Types (OR)
 * ---------------------------------------------------------
 * Union types allow a variable to hold values of multiple types.
 */
{
  console.log("--- PART 1: Union Types ---");

  // `Id` can hold either a string OR a number
  type Id = string | number;

  let userId: Id = 101; 
  console.log("userId (Number):", userId);

  userId = "EMP-101"; // Assigning a string is also totally fine!
  console.log("userId (String):", userId);
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 2: Literal Types
 * ---------------------------------------------------------
 * Literal types restrict a variable to specific string/number values.
 */
{
  console.log("--- PART 2: Literal Types ---");

  // A user can ONLY be one of these exact strings
  type UserRole = "student" | "teacher" | "admin";

  let role: UserRole = "student";
  // role = "hacker"; // ❌ Error: Type '"hacker"' is not assignable to type 'UserRole'

  console.log("Assigned Role:", role);
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 3: Intersection Types (AND)
 * ---------------------------------------------------------
 * Intersection combines multiple types into one massive type.
 */
{
  console.log("--- PART 3: Intersection Types ---");

  type BasicPerson = { name: string };
  type ContactInfo = { phone: string };

  // Combine both objects using the `&` symbol
  type FullProfile = BasicPerson & ContactInfo;

  const userProfile: FullProfile = {
    name: "Ajay Keshri",
    phone: "+91 99999 99999",
  };

  console.log("Combines profile object:", userProfile);
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 4: Enums
 * ---------------------------------------------------------
 * Enums define a set of named constants (keys mapped to values).
 */
{
  console.log("--- PART 4: Enums ---");

  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }

  let currentMove: Direction = Direction.Up;

  console.log("Player is moving:", currentMove);
}

console.log("\n✅ Module 02 completed!\n");
