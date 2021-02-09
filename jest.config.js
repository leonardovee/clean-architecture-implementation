module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  watchPathIgnorePatterns: ['globalConfig'],
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**']
}
