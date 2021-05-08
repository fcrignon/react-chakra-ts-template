process.env.TZ = 'GMT'

module.exports = {
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['.*/dist/.*'],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/tests/**/*.test.*'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1',
    '@shared/(.*)': '<rootDir>/../shared/src/$1'
  }
}
