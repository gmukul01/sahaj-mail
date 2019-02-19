import React from 'react';

const ActionBar = ({ onRefresh, onDelete, onRead }) => (
	<div className="inbox-actionbar">
		<div className="actions">
			<button className="button-outlined actions-refresh" onClick={onRefresh}>
				<i className="fas fa-sync-alt" />
				Refresh
			</button>
			<button className="button-outlined" onClick={onRead}>
				<i className="far fa-eye" />
			</button>
			<button className="button-outlined">
				<i className="fas fa-exclamation" />
			</button>
			<button className="button-outlined" onClick={onDelete}>
				<i className="far fa-trash-alt" />
			</button>
		</div>

		<div>
			<button className="button-outlined">
				<i className="fas fa-arrow-left" />
			</button>
			<button className="button-outlined">
				<i className="fas fa-arrow-right" />
			</button>
		</div>
	</div>
);

export default React.memo(ActionBar);
