const EmployeesAddForm = () => {
    return (
        <div className="add-form">
            <h3 className="add-form-title">Add a New Employee</h3>
            <form className="add-form-wrapper">
                <input
                    type="text"
                    className="add-form-input"
                    placeholder="First and Last name"
                />
                <input
                    type="number"
                    className="add-form-input"
                    placeholder="Salary"
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
