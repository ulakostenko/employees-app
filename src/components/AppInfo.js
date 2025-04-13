const AppInfo = ({totalEmployees, bonusEmployees}) => {
    return (
        <div className="app-info">
            <h1 className="app-title">Staff of the Company</h1>
            <div className="app-stats">
                <h2 className="app-stats-item">Total number of employees: {totalEmployees}</h2>
                <h2 className="app-stats-item">Receiving a bonus: {bonusEmployees}</h2>
            </div>
        </div>
    )
}

export default AppInfo;
