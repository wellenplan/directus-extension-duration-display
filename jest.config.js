module.exports = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "jsdom",
  resolver: 'jest-node-exports-resolver',
  moduleFileExtensions: ["js", "ts", "vue"],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@directus/shared)"],
};
