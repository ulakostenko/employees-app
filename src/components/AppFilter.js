const AppFilter = ({activeFilter, onFilterSelect}) => {

    const buttonsData = [
        {name: 'all', label: 'All Employees'},
        {name: 'promotion', label: 'For Promotion'},
        {name: 'salary', label: 'Salary over $1000'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = activeFilter === name ? 'active' : '';
        return (
            <button
                type="button"
                className={`filter-btn ${active}`}
                key={name}
                onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className="filter-btns">
            {buttons}
        </div>
    )
}

export default AppFilter;
