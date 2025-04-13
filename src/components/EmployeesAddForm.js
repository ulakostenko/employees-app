import {useState} from 'react';
import './style.css';

const EmployeesAddForm = ({onAdd}) => {

    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || salary <= 0) {
            alert('Invalid data');
            return;
        }

        onAdd(name, +salary);
        setName('');
        setSalary('');
    }

    return (
        <div className="add-form">
            <h3 className="add-form-title">Add a New Employee</h3>
            <form className="add-form-wrapper" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="add-form-input"
                    placeholder="First and Last name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    className="add-form-input"
                    placeholder="Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn add-form-btn"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;
