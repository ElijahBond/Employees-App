import { Component } from 'react';

import { AppFilter } from '../app-filter/app-filter';
import { AppInfo } from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { EmployeesList } from '../employees-list/employees-list';
import { SearchPanel } from '../search-panel/search-panel';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name:'John' , salary: 800, increase: false, id: 1},
                {name:'Ann' , salary: 3000, increase: true, id: 2},
                {name:'Mike' , salary: 5000, increase: false, id: 3}
            ]
        }
        this.maxId = 4;
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id == id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }    


    render() {
        return (
            <div className="app">
                <AppInfo />
    
                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;