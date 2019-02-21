import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

configure({ adapter: new Adapter() });

jest.mock('react', () => {
	const r = jest.requireActual('react');

	return { ...r, memo: x => x };
});
