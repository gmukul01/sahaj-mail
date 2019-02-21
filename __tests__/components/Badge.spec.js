import React from 'react';
import renderer from 'react-test-renderer';

import Badge from 'components/Badge';

describe('Badge Component', () => {
	it('should match snapshot when badgeContent is non zero', () => {
		const badge = renderer
			.create(
				<Badge className="badge-email" badgeContent={4}>
					<i className={`fas fa-bell`} />
				</Badge>
			)
			.toJSON();
		expect(badge).toMatchSnapshot();
	});

	it('should match snapshot when badgeContent is zero', () => {
		const badge = renderer
			.create(
				<Badge className="badge-email" badgeContent={0}>
					<i className={`fas fa-bell`} />
				</Badge>
			)
			.toJSON();
		expect(badge).toMatchSnapshot();
	});
});
