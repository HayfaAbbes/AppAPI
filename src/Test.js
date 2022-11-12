import React, { useState } from 'react'

const Test = () => {
    const [text,setText]= useState("");
  return (
    <div>
    <input
     type="text" 
     value={text}
      onChange={(e)=>setText(e.target.value)}/>
      <button>Go!</button>
      </div>
  )
}

export default Test