module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": () => [
    "eslint --fix",
    "prettier --write 'src/**/*.{ts,tsx}'",
    "tsc -p tsconfig.json --noEmit",
    "jest --passWithNoTests",
  ],
};
