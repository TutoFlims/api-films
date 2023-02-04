/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts"],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/utils/loadEnvironments.ts",
    "!src/index.ts",
    "!src/server/index.ts",
    "!*.config",
    "!data/",
  ],
  resolver: "jest-ts-webcompat-resolver",
};
