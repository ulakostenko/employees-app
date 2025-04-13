import React, { useState, useEffect } from 'react';
import AppInfo from './AppInfo';
import SearchPanel from './SearchPanel';
import AppFilter from './AppFilter';
import EmployeesList from './EmployeesList';
import EmployeesAddForm from './EmployeesAddForm';

const App = () => {

    // Ініціалізація даних з localStorage
    const initialData = JSON.parse(localStorage.getItem('employees')) || [
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
    ];

    const [data, setData] = useState(initialData);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    // Зберігаємо дані у localStorage при кожній зміні
    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(data));
    }, [data]);

    // Пошук працівників
    const searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
    }

    const onUpdateSearch = (term) => {
        setSearch(term);
    }

    // Фільтрація працівників
    const filterEmp = (items, filter) => {
        switch (filter) {
            case 'promotion':
                return items.filter(item => item.increase);
            case 'salary':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    // Видалення працівника з підтвердженням
    const deleteItem = (id) => {
        const confirmDelete = window.confirm('Ви впевнені що хочете видалити?');
        if (confirmDelete) {
            setData(data.filter(item => item.id !== id));
        }
    }

    // Редагування працівника
    const editItem = (id, newItem) => {
        setData(data.map(item => item.id === id ? {...item, ...newItem} : item));
    }

    // Додавання працівника
    const addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: Date.now() // Генеруємо унікальний id
        }
        setData([...data, newItem]);
    }


    const visibleData = filterEmp(searchEmp(data, search), filter);

    return (
        <div className="app">
            <AppInfo
                totalEmployees={data.length}
                bonusEmployees={data.filter(item => item.increase).length}
            />

            <div className="search-filter-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
                <AppFilter activeFilter={filter} onFilterSelect={setFilter}/>
            </div>

            <EmployeesList
                data={visibleData}
                onDelete={deleteItem}
                onEdit={editItem}
            />

            <EmployeesAddForm onAdd={addItem} />
        </div>
    );
};

export default App;
