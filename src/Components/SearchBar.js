import React, { useEffect, useState } from 'react';

const SearchBar = ({ onSub }) => {
	const [searchValue, setSearchValue] = useState('');
	const [debouncedTerm, setDebouncedTerm] = useState('');

	const handleFieldChange = e => setSearchValue(e.target.value);

// setting a debounced term after 1000ms stop in typing
	useEffect(()=> {
	const timeOutId = setTimeout(()=> {
			setDebouncedTerm(searchValue)
		},1000)
	return ()=> {  
		clearTimeout(timeOutId)
	}
	},[searchValue])

// sending the debounced term to App component
	useEffect(()=> {
		onSub(debouncedTerm)
	},[debouncedTerm])

	return (
		<div className='ui segment'>
			<form className='ui form' >
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
