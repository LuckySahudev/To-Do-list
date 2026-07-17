import React from 'react'
import Card from './Card'

const RecentWin = ({notes,setNotes}) => {
  return (
    <div className='bg-black w-full text-white h-1/2 lg:h-full lg:border-l-2 flex flex-col lg:w-1/2 p-10
     '>

      <h1 className='text-5xl mb-5'>Recent Notes</h1>
      <div className=' h-[80%]  flex flex-wrap gap-5 p-5 w-full overflow-y-auto '>
        {
          notes.map((ele,idx)=>(
            <Card key={idx} idx={idx} ele={ele} notes={notes} setNotes={setNotes}  />
          ))
        }
      </div>
      
    </div>
  )
}

export default RecentWin
