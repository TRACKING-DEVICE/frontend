import React from 'react'
import ExpenseForm from './ExpensesForm'

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/Hero_img.jpg')] bg-no-repeat bg-cover bg-center h-screen">
  <p className="bg-black/60 text-sm md:text-base px-4 py-1 rounded-full mt-20 shadow-lg tracking-wide">
    Budget Tracking App
  </p>

  <h1 className="bg-black/60 font-playfair text-3xl md:text-5xl leading-snug md:leading-[64px] font-extrabold max-w-4xl mt-6 px-4 py-3 rounded-lg drop-shadow-lg">
    Take Control of Your Finances With Ease
  </h1>

  <p className="bg-black/60 mt-6 text-sm md:text-lg max-w-2xl font-light leading-relaxed px-4 py-3 rounded-lg text-white/90">
    Our Budget Tracker helps you manage income, track expenses, and monitor savings—all in one place. With a clear and simple dashboard, you’ll understand where your money goes and how to make smarter financial decisions every day.
  </p>

  <p className="bg-black/60 mt-6 text-sm md:text-lg max-w-xl font-medium leading-relaxed px-4 py-2 rounded-lg text-white">
    Scroll Down to add your new expense here
  </p>
</div>

  )
}

export default Hero