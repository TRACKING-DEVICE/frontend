import React from 'react'
import ExpenseForm from './ExpensesForm'

const Hero = () => {
  return (
    <div 
        className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/Hero_img.jpg')] bg-no-repeat bg-cover bg-center h-screen">
          <p className = 'bg-[#4989FF]/50 px-3.5 py-1 round-full mt-20'>Budjet Tracking App</p>
            <h1 className= 'font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold-extrabold md:font-extrabold max-w-xl mt-4'>The Budget Tracker is a web-based application designed to help users manage their finances effectively. It allows users to track income, expenses, and savings in one place. The goal of the project is to promote better financial habits by providing a clear overview of where money is going and how much is left.</h1>
    </div>
  )
}

export default Hero