/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  // coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["node_modules", "dist"],
  transform: {
    "\\.ts$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
};
