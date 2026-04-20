/**
 * =========================================================
 * MODULE 12: Decorators
 * =========================================================
 * Meta-programming to attach behaviors automatically.
 */

console.log("🚀 Starting Module 12: Decorators...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Class, Method, and Property Decorators
 * ---------------------------------------------------------
 */
{
  console.log("--- PART 1: Decorators Implementation ---");
  
  // Class decorator
  function sealed(constructor: Function): void {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

  // Method decorator
  function logCall(_target: object, methodName: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value as (...args: unknown[]) => unknown;
    descriptor.value = function (...args: unknown[]): unknown {
      console.log(`[LOG] Calling method '${methodName}' with args:`, args);
      return originalMethod.apply(this, args);
    };
  }

  // Property decorator
  function maxLength(limit: number) {
    return function (target: object, propertyKey: string): void {
      let internalValue = "";
      Object.defineProperty(target, propertyKey, {
        get() { return internalValue; },
        set(newValue: string) {
          internalValue = newValue.length > limit ? newValue.slice(0, limit) : newValue;
        },
      });
    };
  }

  @sealed
  class NoticeBoard {
    @maxLength(20)
    title = "";

    @logCall
    post(message: string): string {
      return "Notice: " + message;
    }
  }

  const board = new NoticeBoard();
  board.title = "TypeScript decorators are extremely useful for real software";
  
  // The title will be capped at 20 chars due to @maxLength
  console.log("Restricted Title:", board.title);
  
  // The console will print our [LOG] before returning this due to @logCall
  console.log("Method Return:", board.post("Class starts at 10"));
  console.log("\n");
}

console.log("✅ Module 12 completed!\n");
