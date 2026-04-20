<div align="center">
  <h1>📚 Decode TypeScript</h1>
  <p><strong>A structured, interactive course to take you from TypeScript Beginner to Advanced.</strong></p>
  <p><i>I built this space during my own learning journey. It's designed so that anyone can learn from it and master TypeScript from scratch!</i></p>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
</div>

<br />

Welcome to **Decode TypeScript**! This GitHub repository is designed as a complete, code-driven course. Instead of just reading theory, you will interact with real TypeScript code.

The learning content is inside the `src` directory, systematically organized into numbered modules that naturally progress from fundamental basics to advanced patterns.

---

## 🧠 How To Study

For the best learning experience, follow this workflow for each folder:

1. **Focus**: Open one folder at a time (e.g., `01_basics`).
2. **Read**: Go through that folder's `README.md` first.
3. **Experiment**: Open `index.ts` and examine the code.
4. **Tinker**: Change variable names, purposely write wrong types to see compiler errors, and test your understanding!
5. **Run**: Execute the code to see the output.

---

## 🗺️ Learning Roadmap

Master TypeScript step-by-step through our curated modules:

| Level | Module | Description |
| :---: | :--- | :--- |
| 🟢 | `src/01_basics` | Introduction to TS and basic types |
| 🟢 | `src/02_types` | Exploring common type tools |
| 🟢 | `src/03_functions` | Typing inputs, outputs, and overloads |
| 🟢 | `src/04_arrays_objects` | Structured data typing |
| 🟡 | `src/05_interfaces` | Defining object shapes |
| 🟡 | `src/06_classes` | Object-oriented TypeScript |
| 🟡 | `src/07_generics` | Reusable, type-safe code |
| 🟡 | `src/08_modules` | Code splitting and sharing |
| 🟠 | `src/09_type_narrowing` | Extracting exact types safely |
| 🟠 | `src/10_utility_types` | Built-in type transformations |
| 🔴 | `src/11_advanced_types` | Conditional and mapped types |
| 🔴 | `src/12_decorators` | Adding metadata to classes |
| 🔴 | `src/13_declaration_files` | Working with `.d.ts` |
| ⚙️ | `src/14_tsconfig` | Configuring the TS compiler |
| 🚀 | `src/15_async` | Typing Promises and async flow |
| 💼 | `src/16_real_world_patterns`| End-to-end practical combinations |

*( 🟢 Beginner | 🟡 Intermediate | 🟠 Advanced | 🔴 Expert )*

---

## 🚀 Getting Started

### 1️⃣ Installation

Make sure you have [Node.js](https://nodejs.org/) installed, then install the dependencies:

```bash
npm install
```

### 2️⃣ Type Checking

To verify that all your TypeScript code is type-safe without compiling down to JS:

```bash
npm run check
```

### 3️⃣ Building the Project

Compile all TypeScript files into valid JavaScript inside the `dist` folder:

```bash
npm run build
```
*(Note: This works because we have mapped `"build": "tsc"` inside the `"scripts"` section of our `package.json`. It runs the exact same process as `npx tsc`!)*

### 4️⃣ Running a Specific Topic

After building, you can execute the compiled JavaScript for any specific lesson. For example, to run the **Basics** module:

```bash
node dist/01_basics/index.js
```
> **Note:** If the `dist` directory is missing or your changes aren't reflecting, always run `npm run build` again.

---

## 🛠️ How to Setup a New TypeScript Project from Scratch

If you want to create your own TypeScript project from scratch, strictly follow these steps:

### 1️⃣ Initialize the Project
Create a new folder and automatically initialize a `package.json` file:
```bash
npm init -y
```

### 2️⃣ Install TypeScript (Project-Wise)
Always install TypeScript locally as a development dependency instead of globally. This locks the TypeScript version for this specific project:
```bash
npm i -D typescript
```

### 3️⃣ Initialize Configuration (`tsconfig.json`)
Create a `tsconfig.json` file to manage your compiler options:
```bash
npx tsc --init
```

### 4️⃣ Create and Configure `src` and `dist` Folders
First, create the source (`src`) and distribution (`dist`) folders in your project directory:
```bash
mkdir src
mkdir dist
```
Then, open your newly created `tsconfig.json` and uncomment/update these two critical settings:
```json
{
  "compilerOptions": {
    "rootDir": "./src",   // Where you write your raw .ts files
    "outDir": "./dist"    // Where the compiled final .js files go
  }
}
```

### 5️⃣ Add Build Scripts (Optional but Recommended)
Instead of typing `npx tsc` every time, you can add shortcuts to your `package.json`:
```json
"scripts": {
  "build": "tsc",
  "build:watch": "tsc --watch"
}
```
Now you can simply run `npm run build` (which runs `tsc` for you) just like in our provided workspace!

### 6️⃣ Compiling Your Code (`tsc`)
Once everything is set up, you compile your code using the TypeScript Compiler (`tsc`).

**Build everything once:**
```bash
npx tsc
```

**Watch mode (Auto-rebuilds when you save a file):**
```bash
npx tsc --watch
```
*(You can also use the shorthand: `npx tsc -w`)*

### 7️⃣ Running Your Compiled Code
After compiling, TypeScript generates standard JavaScript files inside your `dist` folder. You run these with Node.js just like any regular JS file:

```bash
node dist/index.js
```
*(Note: Replace `index.js` with your actual file name!)*

---

## ⭐ Support

If this repo helped you:

- ⭐ Star the repo to support and share
- 💖 Sponsor if you want to support development

Every bit of support helps 🙌

---

<div align="center">
  <i>Happy Typing! 🚀 Built with ❤️ for developers.</i>
</div>
