import React, { useState } from 'react';

const SearchBar = ({ onSub }) => {
	const [searchValue, setSearchValue] = useState({ value: ' ' });

	const handleFieldChange = e => setSearchValue({ value: e.target.value });

	const handleSubmit = event => {
		event.preventDefault();
		onSub(searchValue);
	};

	return (
		<div className='ui segment'>
			<form className='ui form' onSubmit={handleSubmit}>
				<div className='field'>
					<label>Search here</label>
					<input
						type='text'
						value={searchValue}
						onChange={handleFieldChange}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
