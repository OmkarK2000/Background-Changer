import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        
        <div className='flex justify-center flex-wrap bg-white fixed bottom-9 gap-2 p-2 inset-x-0'>
          <button className='bg-red-500 px-4 py-1 rounded-xl text-white' onClick={()=> setColor('red')}>Red</button>
          <button className='bg-green-700 px-4 py-1 rounded-xl text-white' onClick={()=> setColor('green')}>Green</button>
          <button className='bg-orange-400 px-4 py-1 rounded-xl text-white' onClick={()=> setColor('orange')}>Orange</button>
          <button className='bg-yellow-300 px-4 py-1 rounded-xl text-white' onClick={()=> setColor('yellow')}>Yellow</button>
          <button className='bg-pink-200 px-4 py-1 rounded-xl text-white' onClick={()=> setColor('pink')}>Pink</button>
          <button className='bg-blue-400 px-4 py-1 rounded-xl text-white' onClick={()=> setColor('skyblue')}>Skyblue</button>
          
        </div>

      </div>
  )
}

export default App
