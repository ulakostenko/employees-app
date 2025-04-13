import {useState} from 'react';

const SearchPanel = ({onUpdateSearch}) => {

    const [term, setTerm] = useState('');

    const onUpdateSearchValue = (e) => {
        setTerm(e.target.value);
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();
        onUpdateSearch(term);
    }

    return (
        <form className="search-panel" onSubmit={onSearchSubmit}>
            <input
                type="text"
                className="search-input"
                placeholder="Find an Employee"
                onChange={onUpdateSearchValue}
                value={term}
            />
            <button type="submit" className="search-btn">
                <i className="fas fa-search"></i>
            </button>
        </form>
    )
}
export default SearchPanel;