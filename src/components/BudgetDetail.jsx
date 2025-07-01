
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BudgetCard from '../components/BudgetCard';
import ExpenseForm from './ExpensesForm';
import ExpenseList from './ExpensesList';
import { BudgetService } from '../api';

const BudgetDetail = () => {
  const { id } = useParams();
  const [budget, setBudget] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const budgetData = await BudgetService.getBudgetById(id);
        const expensesData = await BudgetService.getExpensesByBudget(id);
        setBudget(budgetData);
        setExpenses(expensesData);
      } catch (error) {
        console.error("Failed to fetch budget details:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleNewExpense = (newExpense) => {
    setExpenses(prev => [newExpense, ...prev]);
    setBudget(prev => ({
      ...prev,
      spent: prev.spent + parseFloat(newExpense.amount)
    }));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!budget) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-bold text-gray-800">Budget not found</h2>
        <p className="text-gray-600 mt-2">The budget you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{budget.name} Budget</h1>
        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
          budget.spent > budget.amount ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
        }`}>
          {budget.spent > budget.amount ? 'Overspent!' : `${Math.round((budget.spent / budget.amount) * 100)}% spent`}
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500 mb-1">Total Budget</h3>
            <p className="text-3xl font-bold">${budget.amount.toFixed(2)}</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500 mb-1">Spent</h3>
            <p className={`text-3xl font-bold ${
              budget.spent > budget.amount ? 'text-red-600' : 'text-gray-700'
            }`}>
              ${budget.spent.toFixed(2)}
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500 mb-1">Remaining</h3>
            <p className={`text-3xl font-bold ${
              budget.amount - budget.spent < 0 ? 'text-red-600' : 'text-green-600'
            }`}>
              ${(budget.amount - budget.spent).toFixed(2)}
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full ${
                budget.spent > budget.amount ? 'bg-red-500' : 'bg-blue-500'
              }`} 
              style={{ width: `${Math.min(100, (budget.spent / budget.amount) * 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Budget Details</h2>
          <BudgetCard budget={budget} fullWidth />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Expenses</h2>
            <span className="text-sm text-gray-500">{expenses.length} items</span>
          </div>
          <ExpenseList expenses={expenses} budgets={[budget]} />
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
        <ExpenseForm budgets={[budget]} onAdd={handleNewExpense} />
      </div>
    </div>
  );
};

export default BudgetDetail;