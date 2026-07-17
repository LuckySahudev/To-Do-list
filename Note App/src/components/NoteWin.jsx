import React, { useState } from 'react'

const NoteWin = ({notes,setNotes}) => {

  const [title , setTitle] = useState('');
  const [note , setNote] = useState('')


  function formSubmit(e){
    e.preventDefault();
    
    if(title === '' || note === ''){
      console.log("Please Enter a Valid note");
      return;
    }

    let newNotes = [...notes];
    newNotes.push({title,note});
    setNotes(newNotes);


    setTitle('');
    setNote('');
  }


  return (
    <form className='text-white h-1/2 lg:h-full   bg-black  flex flex-col lg:w-1/2 p-7 gap-5 '
    onSubmit={(e)=>{
      formSubmit(e);
    }}
    >

        <h1 className='text-5xl mb-5'>Write Note</h1>
        <input 
        className='border-2 outline-none text-xl py-2 px-3 rounded-lg' 
        type="text"
        placeholder='Enter title' 
        value={title}
        onChange={(e)=>{
          // two way binding 
          setTitle(e.target.value);
        }}
        />

        <textarea 
        rows={2}
        className=' border-2 outline-none text-lg py-2 px-3 rounded-lg'
        placeholder='Enter your note'
        value={note}
        onChange={(e)=>{
          // two way binding 
          setNote(e.target.value);
        }}
        ></textarea>

        <input 
        type="submit"
        className=' bg-blue-800 border-2 py-2 px-3 rounded-lg active:scale-99'
         />
        

      </form>
  )
}

export default NoteWin
