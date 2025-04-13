import {useState} from 'react';
import './style.css';

const EmployeesListItem = ({name, salary, increase, number, onDelete, onEdit}) => {

    const [editMode, setEditMode] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newSalary, setNewSalary] = useState(salary);
    const [newIncrease, setNewIncrease] = useState(increase);

    const onSave = () => {
        if (newName.trim() === '' || newSalary <= 0) {
            alert('Invalid data');
            return;
        }
        onEdit({name: newName, salary: +newSalary, increase: newIncrease});
        setEditMode(false);
        window.location.reload();
    }


    return (
        <li className="employee-item">
            <p>{`${number}.`}</p>

            {editMode ? (
                <>
                    <input
                        className="employee-name-edit"
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <input
                        className="employee-salary-edit"
                        type="number"
                        value={newSalary}
                        onChange={(e) => setNewSalary(e.target.value)}
                    />

                    <label>
                        <input
                            type="checkbox"
                            checked={newIncrease}
                            onChange={() => setNewIncrease(!newIncrease)}
                        />
                        Promotion
                    </label>
                    <button className="btn save-btn" onClick={onSave}>Save</button>
                </>
            ) : (
                <>
                    <span className="employee-name">{name} </span>
                    <input
                        type="text"
                        className="employee-salary"
                        defaultValue={`$ ${salary}`}
                        readOnly
                    />
                    <label>
                        <input type="checkbox" checked={increase} readOnly/>
                        Promotion
                    </label>
                    <button className="btn edit-btn" onClick={() => setEditMode(true)}>
                        <i className="fas fa-pen"></i>
                    </button>
                </>
            )}

            <button className="btn delete-btn" onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    )
}

export default EmployeesListItem;
