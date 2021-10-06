import React, { useState } from 'react';

const SearchBar = ({ onSub }) => {
	const [searchValue, setSearchValue] = useState('');

	const handleFieldChange = e => setSearchValue(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();
		try {
			onSub(searchValue);
		} catch (err) {
			console.error(err);
		}
		setSearchValue('');
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
						placeholder={'Search for something'}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
