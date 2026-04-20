/**
 * =========================================================
 * MODULE 05: Interfaces
 * =========================================================
 * Interfaces are the best way to declare the shapes of objects.
 */

console.log("🚀 Starting Module 05: Interfaces...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Interface Basics
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 1: Interface Basics ---");
  interface Book {
    title: string;
    price: number;
  }
  
  const myBook: Book = { title: "TypeScript Mastery", price: 500 };
  console.log("Book Object:", myBook, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 2: Extending Interfaces
 * ---------------------------------------------------------
 * Interfaces can inherit properties from other interfaces.
 */
{
  console.log("--- PART 2: Extending Interfaces ---");
  interface User {
    name: string;
  }
  
  interface Admin extends User {
    role: string;
  }
  
  const superAdmin: Admin = { name: "Ajay", role: "SuperAdmin" };
  console.log("Admin Object:", superAdmin, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 3: Interface Methods
 * ---------------------------------------------------------
 * You can declare functions inside interfaces.
 */
{
  console.log("--- PART 3: Interface Methods ---");
  interface Animal {
    name: string;
    makeSound(): void;
  }
  
  const dog: Animal = {
    name: "Buddy",
    makeSound() {
      console.log("Woof woof!");
    }
  };
  
  dog.makeSound();
  console.log("\n");
}

console.log("✅ Module 05 completed!\n");
