import React, { useEffect, useState } from 'react';
import unsplash from '../api/unsplash';
import "./searchBar.css"
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({ onResult }) => {
	const [searchValue, setSearchValue] = useState('');
	const [debouncedTerm, setDebouncedTerm] = useState('');

	const handleFieldChange = e => setSearchValue(e.target.value);

// setting a debounced term after 1000ms stop in typing
	useEffect(()=> {
	const timeOutId = setTimeout(()=> {
			setDebouncedTerm(searchValue? searchValue: "night")
		},1000)
	return ()=> {  
		clearTimeout(timeOutId)
	}
	},[searchValue])

// sending the debounced term to App component
	useEffect(()=> {
		const search = async () => {
			const response = await unsplash.get('/search/photos', {
				params: { query: debouncedTerm },
			});
			onResult(response.data.results)
		};
		if(debouncedTerm){
			search()
		}
		
	},[debouncedTerm])

	return (
		<div className="container">
			<div className='searchBar field'>
				<input
					type='text'
					value={searchValue}
					onChange={handleFieldChange}
					placeholder={'Search for something'}
				/>
				<BiSearch className="searchIcon" size="30px" color="green"/>
			</div>
		</div>
	);
};

export default SearchBar;
