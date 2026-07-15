import React from 'react'
import NoteWin from './components/NoteWin'
import RecentWin from './components/RecentWin'
const App = () => {
  return (
    <div className='w-screen lg:flex h-svh' >
      <NoteWin/>
      <RecentWin/>
    </div>
  )
}

export default App
