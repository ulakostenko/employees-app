import './style.css';

const EmployeesListItem = ({name, salary, increase, number}) => {

    return (
        <li className="employee-item">
            <p>{`${number}.`}</p>
            <span className="employee-name">{name}</span>
            <input
                type="text"
                className="employee-salary"
                defaultValue={`$ ${salary}`}
                readOnly
            />
            <button className="btn edit-btn">
                <i className="fas fa-pen"></i>
            </button>
            <button className="btn delete-btn">
                <i className="fas fa-trash"></i>
            </button>
        </li>
    )
}

export default EmployeesListItem;

