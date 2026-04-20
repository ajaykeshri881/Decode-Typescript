/**
 * =========================================================
 * MODULE 15: Async Programming
 * =========================================================
 * Working safely with Promises and async/await.
 */

console.log("🚀 Starting Module 15: Async...\n");

type User = {
  id: number;
  name: string;
};

/**
 * ---------------------------------------------------------
 * PART 1: Promises
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 1: Promise Typings ---");
  function getUser(userId: number): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, name: "Ajay Keshri" });
      }, 500);
    });
  }
}

/**
 * ---------------------------------------------------------
 * PART 2: Async / Await
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 2: Async/Await Workflow ---");
  
  // Re-declare for scope isolation
  function fetchUserById(userId: number): Promise<User> {
    return new Promise((resolve) => setTimeout(() => resolve({ id: userId, name: "Ajay Async" }), 500));
  }

  async function showUser(): Promise<void> {
    try {
      console.log("Fetching user...");
      const user = await fetchUserById(1);
      console.log("Fetched User:", user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error occurred:", error.message);
      }
    }
  }

  showUser();
}
