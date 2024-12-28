import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box'

function App() {
  const [count, setCount] = useState(0);

const boxArray = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

  return (
    <>
     <div>
      <h1 className='title'>Hello World</h1>
      <div className='box-container'>
        {boxArray.map((row, index) => 
        row.map((box, index) => ( 
          <Box key={index} />
        )))}
      </div>
     </div>
    </>
  )
}

export default App
