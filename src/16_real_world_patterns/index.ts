/**
 * =========================================================
 * MODULE 16: Real World Patterns
 * =========================================================
 * Combining TypeScript concepts for production-ready setups.
 */

console.log("🚀 Starting Module 16: Real World Patterns...\n");

/**
 * ---------------------------------------------------------
 * PART 1: API Response Pattern & Types
 * ---------------------------------------------------------
 * Standardizing Success and Error responses from endpoints.
 */
{
  console.log("--- PART 1: Discriminated API Responses ---");

  type SuccessResponse<T> = { ok: true; data: T; };
  type ErrorResponse = { ok: false; message: string; };
  type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

  type Product = { id: number; name: string; price: number; };

  // Safely returns a union type handling both cases perfectly
  function fetchProducts(simulateError: boolean): ApiResponse<Product[]> {
    if (simulateError) {
      return { ok: false, message: "Network Timeout: Could not load products" };
    }
    return {
      ok: true,
      data: [{ id: 1, name: "Keyboard", price: 1500 }, { id: 2, name: "Mouse", price: 700 }],
    };
  }

  // Type Guards in action based on the "ok" flag!
  function printResponse<T>(response: ApiResponse<T>): void {
    if (response.ok) {
      console.log("✅ Success! Data:", response.data);
    } else {
      console.log("❌ Error:", response.message);
    }
  }

  console.log("Testing Success Scenario:");
  printResponse(fetchProducts(false));
  
  console.log("\nTesting Error Scenario:");
  printResponse(fetchProducts(true));
  console.log("\n");
}

console.log("✅ Module 16 completed!\n");
