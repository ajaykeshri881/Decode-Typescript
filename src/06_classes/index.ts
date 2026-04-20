/**
 * =========================================================
 * MODULE 06: Classes
 * =========================================================
 * Object-oriented TypeScript using classes and access modifiers.
 */

console.log("🚀 Starting Module 06: Classes...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Classes & Constructors
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 1: Classes & Constructors ---");
  class Greeting {
    message: string;
    constructor(msg: string) {
      this.message = msg;
    }
    sayHello() {
      console.log(this.message);
    }
  }
  
  const greet = new Greeting("Hello TypeScript!");
  greet.sayHello();
  console.log("\n");
}

/**
 * ---------------------------------------------------------
 * PART 2: Access Modifiers
 * ---------------------------------------------------------
 * public (default), private (class only), protected (class & subclasses)
 */
{
  console.log("--- PART 2: Access Modifiers ---");
  class BankAccount {
    public owner: string;
    private balance: number; // Cannot be accessed outside the class
    
    constructor(owner: string, initialBalance: number) {
      this.owner = owner;
      this.balance = initialBalance;
    }
    
    public getBalance(): number {
      return this.balance;
    }
  }
  
  const account = new BankAccount("Ajay", 1000);
  console.log(`${account.owner}'s Balance: ${account.getBalance()}\n`);
}

/**
 * ---------------------------------------------------------
 * PART 3: Parameter Properties
 * ---------------------------------------------------------
 * Shortcut to define and assign properties directly in the constructor.
 */
{
  console.log("--- PART 3: Parameter Properties ---");
  class Player {
    constructor(public name: string, private score: number) {}
    
    getScore() { return this.score; }
  }
  
  const p1 = new Player("Virat", 100);
  console.log(`Player: ${p1.name}, Score: ${p1.getScore()}\n`);
}

console.log("✅ Module 06 completed!\n");
