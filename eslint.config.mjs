import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";
// Import fixupConfigRules to ensure compatibility with legacy configs
import { fixupConfigRules } from "@eslint/compat";

// Resolve __dirname and __filename for module environments
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Use fixupConfigRules to correctly load and apply rules from the legacy Next.js configs.
const eslintConfig = fixupConfigRules(
  compat.extends("next/core-web-vitals", "next/typescript")
);

export default [
  // 1. Global ignores for generated files and build artifacts
  {
    ignores: [
      "node_modules/",
      ".next/",
      "dist/",
      "out/",
      // Important: Ignore generated Prisma runtime files if applicable
      "src/generated/",
      ".prisma/",
    ],
  },
  // 2. Apply the Next.js configurations converted by FlatCompat
  ...eslintConfig,

  // 3. Optional: Add custom rules or overrides
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      // Example: Ensure console logs are treated as warnings during development
      // "no-console": "warn",

      // Ensure 'use client' or 'use server' directives are placed correctly in Next.js
      "react/react-in-jsx-scope": "off",
    },
  },
];
