
export const user = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com" }
  ];
  
  export const budgets = [
    { id: 1, userId: 1, name: "Groceries", amount: 500, spent: 327, color: "bg-blue-500" },
    { id: 2, userId: 1, name: "Entertainment", amount: 200, spent: 85, color: "bg-purple-500" },
    { id: 3, userId: 1, name: "Transport", amount: 300, spent: 210, color: "bg-amber-500" },
    { id: 4, userId: 1, name: "Utilities", amount: 250, spent: 250, color: "bg-emerald-500" },
    { id: 5, userId: 1, name: "Dining Out", amount: 350, spent: 280, color: "bg-rose-500" },
    { id: 6, userId: 1, name: "Shopping", amount: 400, spent: 420, color: "bg-indigo-500" },
  ];
  
  export const expenses = [
    { id: 1, budgetId: 1, amount: 75.50, description: "Weekly groceries", date: "2023-10-15", category: "Food" },
    { id: 2, budgetId: 2, amount: 25.00, description: "Movie tickets", date: "2023-10-12", category: "Leisure" },
    { id: 3, budgetId: 3, amount: 45.00, description: "Gas refill", date: "2023-10-10", category: "Transport" },
    { id: 4, budgetId: 1, amount: 32.50, description: "Supermarket", date: "2023-10-08", category: "Food" },
    { id: 5, budgetId: 4, amount: 120.00, description: "Electricity bill", date: "2023-10-05", category: "Utilities" },
    { id: 6, budgetId: 5, amount: 65.00, description: "Dinner with friends", date: "2023-10-03", category: "Dining" },
    { id: 7, budgetId: 6, amount: 89.99, description: "New shoes", date: "2023-10-01", category: "Shopping" },
    { id: 8, budgetId: 3, amount: 35.00, description: "Bus pass", date: "2023-09-28", category: "Transport" },
  ];