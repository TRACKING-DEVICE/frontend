import {  budgets, expenses } from './mocData';


const delay = () => new Promise(resolve => setTimeout(resolve, 800));

export const BudgetService = {
  getBudgets: async () => {
    await delay();
    return [...budgets];
  },

  getExpenses: async () => {
    await delay();
    return [...expenses];
  },

  addExpense: async (expense) => {
    await delay();

    const newExpense = {
      id: expenses.length + 1,
      ...expense,
      date: new Date().toISOString().split('T')[0]
    };

    expenses.unshift(newExpense);

    const budgetIndex = budgets.findIndex(b => b.id === parseInt(expense.budgetId));
    if (budgetIndex !== -1) {
      budgets[budgetIndex].spent += parseFloat(expense.amount);
    }

    return newExpense;
  },

  getBudgetById: async (id) => {
    await delay();
    const budget = budgets.find(b => b.id === parseInt(id));
    if (!budget) throw new Error('Budget not found');
    return { ...budget };
  },

  getExpensesByBudget: async (budgetId) => {
    await delay();
    return expenses.filter(e => e.budgetId === parseInt(budgetId));
  }
};
