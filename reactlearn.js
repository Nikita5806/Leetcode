import React from 'react'

const App = () => {
  return (
    <div>
      <form >
        <input 
        onChange={(e)=>{
          console.log(e.target.value)
          }}
        type="text"  placeholder='enter you name'/>
      </form>
    </div>
  )
}

export default App
