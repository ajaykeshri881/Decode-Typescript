/**
 * =========================================================
 * MODULE 08: Modules
 * =========================================================
 * Code splitting and sharing using export/import.
 */
import { add, subtract } from "./mathHelpers";
import { shout } from "./stringHelpers";

console.log("🚀 Starting Module 08: Modules...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Importing and Exporting
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 1: Using Imported Functions ---");
  const sum = add(10, 5);
  const difference = subtract(10, 5);
  const loudText = shout("modules are simple");

  console.log(`Sum of 10 and 5: ${sum}`);
  console.log(`Difference between 10 and 5: ${difference}`);
  console.log(`Shouted text: ${loudText}\n`);
}

console.log("✅ Module 08 completed!\n");
