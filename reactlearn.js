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


import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='bg-pink-50 flex py-5 px-10  items-center justify-between'>
    <h2 className='text-3xl'> ClothMart </h2>
    <div className='flex gap-8 items-center'>
      <h4 className='text-xl'>Home</h4>
      <h4  className='text-xl'>About</h4>
      <h4 className='text-xl'>Services</h4>
      <h4 className='text-xl'>Mycart</h4>
    </div>
  </nav>
    </div>
  )
}

export default Header
