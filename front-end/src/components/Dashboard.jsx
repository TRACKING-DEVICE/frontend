import React, { useState, useEffect } from 'react';
import BudgetCard from '../components/BudgetCard';
import ExpenseForm from './ExpensesForm';
import ExpenseList from './ExpensesList';
import SummaryCards from '../components/SummaryCards';
import { BudgetService } from '../api';

const Dashboard = () => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [budgetsData, expensesData] = await Promise.all([
          BudgetService.getBudgets(),
          BudgetService.getExpenses()
        ]);
        setBudgets(budgetsData);
        setExpenses(expensesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  const handleNewExpense = (newExpense) => {
    setExpenses(prev => [newExpense, ...prev]);
    setBudgets(prev => prev.map(budget => 
      budget.id === newExpense.budgetId 
        ? {...budget, spent: budget.spent + parseFloat(newExpense.amount)} 
        : budget
    ));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Budget Dashboard</h1>
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
          Total Budgets: ${budgets.reduce((sum, b) => sum + b.amount, 0)}
        </div>
      </div>

      <SummaryCards budgets={budgets} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Your Budgets</h2>
            <span className="text-sm text-gray-500">{budgets.length} categories</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {budgets.map(budget => (
              <BudgetCard key={budget.id} budget={budget} />
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Recent Expenses</h2>
            <span className="text-sm text-gray-500">Last 5</span>
          </div>
          <ExpenseList expenses={expenses.slice(0, 5)} budgets={budgets} />
        </div>
      </div>
      
      <div className="mt-12">
        <ExpenseForm budgets={budgets} onAdd={handleNewExpense} />
      </div>
    </div>
  );
};

export default Dashboard;