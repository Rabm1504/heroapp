// components/Search/Search.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSuperheroApi } from '../../api/index.jsx';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { getAllSuperheroes } = useSuperheroApi();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getAllSuperheroes(searchTerm);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => getAllSuperheroes(searchTerm)}>Search</button>
    </div>
  );
};

export default Search;
