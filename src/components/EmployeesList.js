import EmployeesListItem from './EmployeesListItem';

const EmployeesList = ({data, onDelete, onEdit}) => {
    const elements = data.map((item, index) => {
        return (
            <EmployeesListItem
                key={item.id}
                name={item.name}
                salary={item.salary}
                increase={item.increase}
                number={index + 1}
                onDelete={() => onDelete(item.id)}
                onEdit={(newItem) => onEdit(item.id, newItem)}
            />
        )
    });

    return (
        <ul className="employee-list">
            {elements}
        </ul>
    )
}

export default EmployeesList;
