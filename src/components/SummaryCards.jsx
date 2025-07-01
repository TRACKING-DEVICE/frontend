import React from 'react'

const SummaryCards = ({ budgets }) => {
    const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);
    const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
    const remaining = totalBudget - totalSpent;
    const overspentBudgets = budgets.filter(b => b.spent > b.amount).length;
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border-t-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium mb-1">Total Budget</h3>
          <p className="text-3xl font-bold text-gray-800">${totalBudget.toFixed(2)}</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow border-t-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium mb-1">Remaining</h3>
          <p className="text-3xl font-bold text-gray-800">${remaining.toFixed(2)}</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow border-t-4 border-red-500">
          <h3 className="text-gray-500 text-sm font-medium mb-1">Overspent Categories</h3>
          <p className="text-3xl font-bold text-gray-800">{overspentBudgets}</p>
        </div>
      </div>
    );
  };

export default SummaryCards