/**
 * =========================================================
 * MODULE 11: Advanced Types
 * =========================================================
 * Conditional, Mapped, and Template Literal Types.
 */

console.log("🚀 Starting Module 11: Advanced Types...\n");

/**
 * ---------------------------------------------------------
 * PART 1: Conditional Types
 * ---------------------------------------------------------
 * Similar to ternary operators but for types.
 */
{
  console.log("--- PART 1: Conditional Types ---");
  type IsString<T> = T extends string ? "yes" : "no";

  const checkOne: IsString<string> = "yes";
  const checkTwo: IsString<number> = "no";
  console.log("Is string check mapping:", checkOne, checkTwo, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 2: Mapped Types
 * ---------------------------------------------------------
 * Loop over an existing interface to create a modified one.
 */
{
  console.log("--- PART 2: Mapped Types ---");
  type Settings = { darkMode: boolean; notifications: boolean };

  // Makes all keys from Settings nullable:
  type NullableSettings = {
    [Key in keyof Settings]: Settings[Key] | null;
  };

  const appSettings: NullableSettings = {
    darkMode: true,
    notifications: null,
  };

  console.log("Mapped Nullable Settings:", appSettings, "\n");
}

/**
 * ---------------------------------------------------------
 * PART 3: Template Literal Types
 * ---------------------------------------------------------
 * Build string type templates perfectly.
 */
{
  console.log("--- PART 3: Template Literal Types ---");
  type EventName<T extends string> = `on${Capitalize<T>}`;

  type LoginEvent = EventName<"login">;
  const loginEventName: LoginEvent = "onLogin";

  console.log("Template Literal generated type string:", loginEventName, "\n");
}

console.log("✅ Module 11 completed!\n");
