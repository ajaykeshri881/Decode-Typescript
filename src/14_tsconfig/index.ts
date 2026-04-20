/**
 * =========================================================
 * MODULE 14: TSConfig Examples
 * =========================================================
 * Exploring what configuration options do.
 */

console.log("🚀 Starting Module 14: TSConfig...\n");

/**
 * ---------------------------------------------------------
 * PART 1: The Options
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 1: Configuration Mapping ---");
  type TsConfigOptions = {
    strict: boolean;
    target: string;
    module: string;
    rootDir: string;
    outDir: string;
  };

  const importantOptions: TsConfigOptions = {
    strict: true,
    target: "esnext",
    module: "commonjs",
    rootDir: "./src",
    outDir: "./dist",
  };

  console.log("Essential Configuration Profile:", importantOptions, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 2: Strict Mode Benefit
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 2: Strict Mode ---");
  // strict mode helps catch mistakes early. Try removing the `: number` typings
  function addPrice(price: number, tax: number): number {
    return price + tax;
  }

  console.log(`Add Price (100 + 18 tax): ${addPrice(100, 18)}\n`);
}

console.log("✅ Module 14 completed!\n");
