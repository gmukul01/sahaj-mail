module.exports = {
	collectCoverage: true,
	rootDir: '../',
	verbose: true,
	setupFiles: ['./__tests__/setup/shim.js', './__tests__/setup/setup.js'],
	modulePaths: ['./src/js', './src', './__tests__'],
	setupFilesAfterEnv: ['./__tests__/mocks/localStorage', './__tests__/mocks/react'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx}',
		'!src/**/index.{js,jsx}',
		'!src/js/util/*.js',
		'!__tests__/**/localStorage.js',
		'!__tests__/**/react.js'
	],
	testPathIgnorePatterns: ['__tests__/mocks/localStorage.js', '__tests__/mocks/react.js', '__tests__/setup/shim.js', '__tests__/setup/setup.js'],
	coveragePathIgnorePatterns: ['node_modules'],
	globals: {
		API_BASE_URL: 'http://localhost:4000'
	}
};
