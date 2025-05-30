import './App.css'

import Form from './components/Form'

import { useState } from 'react'

import {useHabitContext} from './components/HabitContext'

function App() {

  const [showForm, SetshowForm] = useState (false);

  const {habits} = useHabitContext();

  const OpenForm = () => {
    SetshowForm(true);
  }

  const CloseForm = () => {
    SetshowForm(false);
  }

  return (
    <>
      <div className='min-h-screen min-w-screen bg-gradient-to-tr from-black to-gray-800 flex flex-col items-center justify-start'>
        <div className='max-w-lg h-12 bg-white grid grid-cols-2 my-10'>
          <button className='text-white bg-green-400 font-medium text-xl' onClick={OpenForm}>New Habit</button>
          <button className='text-white bg-blue-600 font-medium text-xl'>Habit Progress</button>
        </div>

        {showForm ? (
            <Form CloseForm={CloseForm}/>
        ) : (
          <div>
            <h1 className='text-white'>List of Habits</h1>
             <ul className="space-y-4">
            {habits.map((habit, index) => (
              <li key={index} className="bg-gray-500 p-4 rounded-lg">
              <p><strong>Habit:</strong> {habit.title}</p>
              <p><strong>Details:</strong> {habit.description}</p>
            </li>
            ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default App
