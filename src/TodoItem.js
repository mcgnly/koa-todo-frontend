import React from 'react';

export default ({todo, status}) => {
	let style={
		display:'flex',
		color: document.getElementById('toggle') ? 'black' : 'grey'
	}

		return (
			<div>
				
				<li>{`${todo}`}</li>
			</div>
			);
	}

