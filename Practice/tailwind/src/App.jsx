import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:'flex', backgroundColor: 'green'}}>
        <div>3</div>
        <div>3</div>
        <div>3</div>
      </div>
      <div className='grid grid-cols-9'>
        <div className='bg-red-500 sm:col-span-3 col-span-9'>3</div>
        <div className='bg-green-500 sm:col-span-3 col-span-9'>3</div>
        <div className='bg-blue-500 sm:col-span-3 col-span-9'>3</div>
        <div className='bg-blue-500 sm:col-span-3 col-span-9'>3</div>
        <div className='bg-red-500 sm:col-span-3 col-span-9'>3</div>
        <div className='bg-green-500 sm:col-span-3 col-span-9'>3</div>
      </div>
    </>
  )
}

export default App
