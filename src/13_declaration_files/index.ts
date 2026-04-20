/**
 * =========================================================
 * MODULE 13: Declaration Files
 * =========================================================
 * How to map global and external Types perfectly.
 */

console.log("🚀 Starting Module 13: Declaration Files...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Utilizing global .d.ts files
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 1: Testing global declarations ---");
  
  // Injecting runtime logic for our fake global 'makeLoud' function declared in external typings
  (globalThis as any).makeLoud = (text: string): string => {
    return text.toUpperCase();
  };

  const loudText = makeLoud("typescript .d.ts is cool");

  // Using a fake namespace ApiTypes defined in typings
  const apiUser: ApiTypes.User = {
    id: 1,
    name: "Ajay Keshri",
  };

  console.log("Used Global function makeLoud():", loudText);
  console.log("Used Global API Type User:", apiUser);
  console.log("\n");
}

console.log("✅ Module 13 completed!\n");
