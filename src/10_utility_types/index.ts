/**
 * =========================================================
 * MODULE 10: Utility Types
 * =========================================================
 * Built-in transformations to create new types from old ones.
 */

console.log("🚀 Starting Module 10: Utility Types...\n");

type User = {
  id: number;
  name: string;
  email: string;
};

/**
 * ---------------------------------------------------------
 * PART 1: Partial & Required
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 1: Partial & Required ---");
  // Partial makes all properties optional
  const draftUser: Partial<User> = { name: "Ajay Keshri" };
  
  // Required makes all properties mandatory
  const fullUser: Required<User> = { id: 1, name: "Ajay", email: "ajay@abc.com" };
  
  console.log("Draft User:", draftUser);
  console.log("Full User:", fullUser, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 2: Pick & Omit
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 2: Pick & Omit ---");
  // Pick only specific fields
  type UserNameOnly = Pick<User, "name">;
  const nameOnly: UserNameOnly = { name: "Aditya" };

  // Omit specific fields (keep the rest)
  type UserWithoutEmail = Omit<User, "email">;
  const noEmailUser: UserWithoutEmail = { id: 3, name: "Sumit" };

  console.log("Picked Name:", nameOnly);
  console.log("Omitted Email:", noEmailUser, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 3: Record
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 3: Record ---");
  // Record<KeyType, ValueType> creates dictionary objects easily
  const scoreBoard: Record<string, number> = {
    ajayKeshri: 90,
    vijay: 95,
  };

  console.log("Score Board:", scoreBoard, "\n");
}

console.log("✅ Module 10 completed!\n");
