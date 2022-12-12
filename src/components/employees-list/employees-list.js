import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';


export const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(item.id)}
                onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}