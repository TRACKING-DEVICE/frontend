import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import BudgetDetail from './components/BudgetDetail';
import ExpenseForm from './components/ExpensesForm';






const App = () => {

  
  const isOwnerPath = useLocation().pathname.includes("Owner");
  

  return (
    <div>
      {!isOwnerPath && <Navbar /> }
      {/* <Dashboard /> */}
      <div className='min-h-[70vh]'>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/budget/:id" element={<BudgetDetail />} />
              <Route path='/expenseform' element = {<ExpenseForm />} />
              {/* <Route path="/expenses" element={<ExpensesPage />} /> */}
              {/* <Route path="/reports" element={<ReportsPage />} /> */}
        </Routes>
        {/* <Dashboard />
        <BudgetDetail />
        <ExpensesPage />
        <ReportsPage />
        <ExpenseForm />
        <ExpenseList /> */}
        
      </div>
    </div>
  );
};

export default App;










