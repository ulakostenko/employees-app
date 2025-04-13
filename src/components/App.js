import React, { useState } from 'react';
import AppInfo from './AppInfo';
import SearchPanel from './SearchPanel';
import AppFilter from './AppFilter';
import EmployeesList from './EmployeesList';
import EmployeesAddForm from './EmployeesAddForm';

const App = () => {

    const [data] = useState([
        {name: 'Robert G.', salary: 1000, increase: true, id: 1},
        {name: 'Jessica N.', salary: 1200, increase: true, id: 2},
        {name: 'David R.', salary: 800, increase: false, id: 3},
        {name: 'Emily S.', salary: 1100, increase: false, id: 4},
        {name: 'Michael B.', salary: 950, increase: true, id: 5},
        {name: 'Emma T.', salary: 1500, increase: false, id: 6},
        {name: 'Daniel L.', salary: 2000, increase: false, id: 7},
        {name: 'Sophia H.', salary: 2500, increase: true, id: 8},
        {name: 'Lucas M.', salary: 1700, increase: false, id: 9},
        {name: 'Olivia K.', salary: 1300, increase: true, id: 10}
    ]);

    return (
        <div className="app">
            <AppInfo totalEmployees={data.length} bonusEmployees={data.filter(item => item.increase).length}/>

            <div className="search-filter-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
};

export default App;
