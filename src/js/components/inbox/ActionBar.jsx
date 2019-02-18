import React from 'react';

const ActionBar = () => (
	<div className="inbox-actionbar">
		<div className="actions">
			<button className="button-solid actions-refresh">
				<i className="fas fa-sync-alt" />
				Refresh
			</button>
			<button className="button-solid">
				<i class="far fa-eye" />
			</button>
			<button className="button-solid">
				<i class="fas fa-exclamation" />
			</button>
			<button className="button-solid" onClick={() => {}}>
				<i className="far fa-trash-alt" />
			</button>
		</div>

		<div>
			<button className="button-solid">
				<i className="fas fa-arrow-left" />
			</button>
			<button className="button-solid">
				<i className="fas fa-arrow-right" />
			</button>
		</div>
	</div>
);

export default React.memo(ActionBar);
