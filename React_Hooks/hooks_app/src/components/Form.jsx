import React, { useState, memo } from 'react'

import {useHabitContext} from './HabitContext'

const Form = memo(({ CloseForm }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const {addHabit} = useHabitContext();

  const handleHabitSubmit = () => {
    if(title.trim() || description.trim()) {
      addHabit(title, description);
      setTitle('');
      setDescription('');
    }
    CloseForm();
  }

  return (
    <div className=' z-30 grid grid-rows-3 grid-cols-1 gap-10 bg-white p-10'>
        <input placeholder='Title' className='bg-gray-200' value={title} onChange={e => setTitle(e.target.value)}></input>
         <input placeholder='Description' className='bg-gray-200' value={description} onChange={e => setDescription(e.target.value)}></input>
        <button className='text-white bg-red-500 font-medium text-md' onClick={handleHabitSubmit}>Save</button>
    </div>
  )
})

export default Form
