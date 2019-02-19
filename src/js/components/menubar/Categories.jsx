import React from 'react';

const Categories = () => {
	const data = ['Work', 'Documents', 'Social', 'Advertising', 'Clients'];
	return (
		<div className={'menubar-categories'}>
			<h5>CATEGORIES</h5>
			<ul>
				{data.map(category => (
					<li className={`menubar-categories-${category.toLowerCase()}`} key={category}>
						<i className="fas fa-circle" />
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
