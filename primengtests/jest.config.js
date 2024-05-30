module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/src/test.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
};
