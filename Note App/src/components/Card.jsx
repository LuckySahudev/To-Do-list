import React from 'react'

const Card = ({ele,notes,setNotes,idx}) => {


  function removeNote() {
    setNotes(notes.filter((_, i) => i !== idx));
  }

  return (
    <div className="w-52 h-60 bg-gray-900 text-white border rounded-2xl overflow-hidden">
      <div className="w-full h-full pt-5 p-5 flex flex-col justify-between items-center">
        <div className="w-full">
          <h2 className="mb-3 text-lg font-semibold text-center">
            {ele.title}
          </h2>

          <p className="rounded-xl border h-4/5 bg-gray-800 text-gray-500 p-2 m-1 cursor-pointer">
            {ele.note}
          </p>
        </div>

        <button 
        className="cursor-pointer w-[90%] mb-1 rounded-sm bg-blue-700 hover:bg-blue-800 text-white"
        onClick={() => removeNote(ele.key)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;