// src/pages/ReportsPage.jsx
import React from 'react';

const ReportsPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Reports & Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Spending Overview</h3>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Comparison</h3>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Category Breakdown</h3>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Expense Trends</h3>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
      </div>
    </div>
  );
};

export default ReportsPage;