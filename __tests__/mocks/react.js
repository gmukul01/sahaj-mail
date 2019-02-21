jest.mock('react', () => {
	const r = jest.requireActual('react');
	return { ...r, memo: x => x };
});
