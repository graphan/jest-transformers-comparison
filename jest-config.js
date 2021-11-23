module.exports = {
  // GENERAL
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true,
      useESM: true,
    },
  },

  // TESTS
   testMatch: [
     '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
     '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
   ],
   testPathIgnorePatterns: ['node_modules'],

//   // MODULES
   modulePathIgnorePatterns: ['node_modules'],
   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'scss'],
   extensionsToTreatAsEsm: ['.ts', '.tsx'],

//   // TRANSFORMS
   transform: {
     '^.+\\.(js|jsx|ts|tsx)$': process.env.TRANSFORMER,
    //  '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',
    //  '^.+\\.(js|jsx|ts|tsx)$': 'esbuild-jest',
   },
  //  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\]'],
   transformIgnorePatterns: ['node_modules'],

//   // PLUGINS
   watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
