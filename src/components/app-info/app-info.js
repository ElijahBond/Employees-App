import './app-info.css'

export const AppInfo = ({increasedEmployees, employees}) => {
    return (
        <div className="app-info">
            <h1>Calculation employees in company</h1>
            <h2>Total numers of empoyees: {employees} </h2>
            <h2>Allowance will be recieved: {increasedEmployees}</h2>
        </div>
    );
}
