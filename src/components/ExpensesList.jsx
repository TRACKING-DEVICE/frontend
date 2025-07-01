import React from 'react'

const ExpenseList = ({ expenses, budgets }) => {
    if (expenses.length === 0) {
      return (
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500">No expenses recorded yet</p>
        </div>
      );
    }
  
    return (
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {expenses.map(expense => {
            const budget = budgets.find(b => b.id === expense.budgetId);
            return (
              <li key={expense.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{expense.description}</p>
                    <div className="flex items-center mt-1">
                      {budget && (
                        <span className={`inline-block w-3 h-3 rounded-full mr-2 ${budget.color}`}></span>
                      )}
                      <span className="text-sm text-gray-500">
                        {budget ? budget.name : 'Uncategorized'} • {expense.date}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-red-600">-${expense.amount.toFixed(2)}</p>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      {expense.category || 'Other'}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

export default ExpenseList