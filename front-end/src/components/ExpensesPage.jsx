// src/pages/ExpensesPage.jsx
import React, { useState, useEffect } from 'react';
import ExpenseList from './ExpensesList';
import ExpenseForm from './ExpensesForm';
import { BudgetService } from '../api';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      setIsLoading(true);
      try {
        const data = await BudgetService.getExpenses();
        setExpenses(data);
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  const handleNewExpense = (newExpense) => {
    setExpenses(prev => [newExpense, ...prev]);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">All Expenses</h1>
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
          Total: ${expenses.reduce((sum, e) => sum + e.amount, 0).toFixed(2)}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <ExpenseList expenses={expenses} />
          )}
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
          <ExpenseForm onAdd={handleNewExpense} />
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;