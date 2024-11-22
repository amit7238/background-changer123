import React, { useState } from 'react'

const BgChange = () => {

    let [color,setColor]=useState("rose")
  return (
    <div className={`h-screen w-screen bg-${color}-700 relative`}>
        <div className='p-4 absolute bottom-2 w-full rounded-md bg-gray-500 flex justify-evenly gap-2'>
            <button className='px-7 py-3 bg-red-700 rounded-lg ' onClick={()=>{setColor("red")}}>Red</button>
            <button className='px-7 py-3 bg-blue-700 rounded-lg' onClick={()=>{setColor("blue")}}>Blue</button>
            <button className='px-7 py-3 bg-pink-700 rounded-lg' onClick={()=>{setColor("pink")}}>Pink</button>
            <button className='px-7 py-3 bg-cyan-700 rounded-lg' onClick={()=>{setColor("cyan")}}>Cyan</button>
            <button className='px-7 py-3 bg-green-700 rounded-lg' onClick={()=>{setColor("green")}}>Green</button>
            <button className='px-7 py-3 bg-lime-700 rounded-lg' onClick={()=>{setColor("lyme")}}>Lyme</button>
            <button className='px-7 py-3 bg-yellow-700 rounded-lg' onClick={()=>{setColor("yellow")}}>Yellow</button>
            <button className='px-7 py-3 bg-purple-700 rounded-lg' onClick={()=>{setColor("purple")}}>Purple</button>
        </div>
       
    </div>
  )
}

export default BgChange
