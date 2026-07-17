import React, { useEffect } from 'react'
import NoteWin from './components/NoteWin'
import RecentWin from './components/RecentWin'
import { useState } from 'react'
const App = () => {

  const [notes , setNotes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("preNotes");
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("preNotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='w-screen lg:flex h-svh' >
      <NoteWin notes={notes} setNotes={setNotes} />
      <RecentWin notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default App
