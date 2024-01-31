import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>/src$1",
    "^@application(.*)$": "<rootDir>/src/application$1",
    "^@infrastructure(.*)$": "<rootDir>/src/infrastructure$1",
  },
  testPathIgnorePatterns: ["/node_modules/"],
};

export default config;
