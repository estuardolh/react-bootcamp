import './ExpenseItem.css'

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div >{props.name}</div>
            <div >Modelo {year}+{month}</div>
            <div className="expense-item__description">
                <h2>expense item!</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
        </div>);
}

export default ExpenseItem;