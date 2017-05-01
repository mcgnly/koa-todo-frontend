import React from 'react';

export default ({todo, completed}) => {
	let color = completed ? 'grey' : 'black';
	let strike = completed ? 'line-through' : 'none';
	let style = {
		'color':color,
		'textDecoration':strike
		}

		return (
			<div>
				<p style={style}>{`${todo}`}</p>
			</div>
			);
	}

