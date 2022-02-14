import './ExpenseItem.css'

function ExpenseItem() {
    const aVariable = 'yay!';

    return (<div className="expense-item">
        <div >Title</div>
        <div className="expense-item__description">
            <h2>expense item! {aVariable}</h2>
            <div className="expense-item__price">$999</div>
        </div>
        </div>)
}

export default ExpenseItem;