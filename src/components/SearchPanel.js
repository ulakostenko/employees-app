const SearchPanel = () => {
    return (
        <div className="search-panel">
            <input
                type="text"
                className="search-input"
                placeholder="Find an Employee"
            />
            <button className="search-btn">
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}

export default SearchPanel;

