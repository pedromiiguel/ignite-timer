module.exports = {
  testPathIgnorePatterns: ['/node_modules'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/**/*.tsx', '!src/**/*.spec.tsx'],
}
