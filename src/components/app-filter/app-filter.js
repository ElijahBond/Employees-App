import './app-filter.css';

export const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All employees
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    Rising employees
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    Salarie over 1000$
            </button>
        </div>
    )
}