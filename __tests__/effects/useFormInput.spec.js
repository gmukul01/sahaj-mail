import { testHook, act } from 'react-testing-library';
import { useFormInput } from 'effects/useFormInput';
import 'react-testing-library/cleanup-after-each';

describe('useFormInput', () => {
	it('should start with correct defaults in state', () => {
		let value;
		testHook(() => ({ value } = useFormInput('dummy')));

		expect(value).toBe('dummy');
	});

	it('should set new value when setValue is called', () => {
		let value, setValue;
		testHook(() => ({ value, setValue } = useFormInput('dummy')));

		expect(value).toBe('dummy');

		act(() => {
			setValue('newDummy');
		});

		expect(value).toBe('newDummy');
	});

	it('should set new value when onChange is called', () => {
		let value, onChange;
		testHook(() => ({ value, onChange } = useFormInput('dummy')));

		expect(value).toBe('dummy');

		act(() => {
			onChange({ target: { value: 'newDummy' } });
		});

		expect(value).toBe('newDummy');
	});
});
