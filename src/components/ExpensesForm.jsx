import React, { useState } from 'react';
import { BudgetService } from '../api';

const ExpenseForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    category: '',
  });
  const [useCustomCategory, setUseCustomCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalCategory = useCustomCategory ? customCategory : formData.category;

    try {
      const newExpense = await BudgetService.addExpense({
        amount: parseFloat(formData.amount),
        description: formData.description,
        category: finalCategory,
      });

      onAdd(newExpense);
      setFormData({ amount: '', description: '', category: '' });
      setCustomCategory('');
      setUseCustomCategory(false);
    } catch (error) {
      console.error("Failed to add expense:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Expense</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            placeholder="0.00"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expense Category</label>
          {!useCustomCategory ? (
            <select
              value={formData.category}
              onChange={(e) => {
                if (e.target.value === 'custom') {
                  setUseCustomCategory(true);
                  setFormData({ ...formData, category: '' });
                } else {
                  setFormData({ ...formData, category: e.target.value });
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Bills">Bills</option>
              <option value="Health">Health</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="custom">+ Add Custom Category</option>
            </select>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter your custom category"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => {
                  setUseCustomCategory(false);
                  setCustomCategory('');
                }}
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                Cancel custom category
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <input
          type="text"
          placeholder="What was this expense for?"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Adding...' : 'Add Expense'}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
