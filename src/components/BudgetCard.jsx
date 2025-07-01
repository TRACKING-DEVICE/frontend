import { Link } from 'react-router-dom';

const BudgetCard = ({ budget, fullWidth = false }) => {
  const percentage = Math.min(100, Math.round((budget.spent / budget.amount) * 100));
  const isOverspent = budget.spent > budget.amount;
  const remaining = budget.amount - budget.spent;

  return (
    <Link to={`/budget/${budget.id}`} className={`block ${fullWidth ? '' : 'h-full'}`}>
      <div className={`bg-white rounded-xl shadow-md p-5 border-l-4 ${
        isOverspent ? 'border-red-500' : 'border-blue-500'
      } hover:shadow-lg transition-shadow h-full`}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg text-gray-800">{budget.name}</h3>
            <p className={`text-2xl font-bold ${isOverspent ? 'text-red-500' : 'text-gray-700'}`}>
              ${budget.spent.toFixed(2)} <span className="text-gray-400 text-sm font-normal">/ ${budget.amount.toFixed(2)}</span>
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isOverspent ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
            {isOverspent ? 'Overspent!' : `${percentage}%`}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className={`h-2.5 rounded-full ${isOverspent ? 'bg-red-500' : 'bg-blue-500'}`} 
            style={{ width: `${isOverspent ? 100 : percentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-500">
          <span>${remaining.toFixed(2)} left</span>
          <span>{isOverspent ? `Exceeded by $${(budget.spent - budget.amount).toFixed(2)}` : 'On track'}</span>
        </div>
      </div>
    </Link>
  );
};

export default BudgetCard;