import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  roots: ["<rootDir>/tests"], // Katalog z testami
  testMatch: ["**/*.test.(ts|tsx)"], // Wzorzec dopasowujący pliki testowe
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"], // Obsługiwane rozszerzenia plików
};

export default config;
