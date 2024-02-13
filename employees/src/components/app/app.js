import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../emploees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import './app.css';

function App() {
    const data = [
        {name: 'John Doe', salary: 800, increase: true, id: 1},
        {name: 'Alex Smith', salary: 3000, increase: true, id: 2},
        {name: 'Carl Grand', salary: 5000, increase: false, id: 3}
    ];
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;