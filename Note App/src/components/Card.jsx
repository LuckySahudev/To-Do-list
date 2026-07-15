import React from 'react'

const Card = () => {
  return (
    
        <div className="w-40 h-52 bg-white rounded-2xl overflow-hidden relative">
            <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/32/7a/52/327a5210248300bd5f4212e215d36d85.jpg"
            alt="Note"
            />
            <div className='  w-full h-full absolute top-0 left-0  pt-7 p-5 text-black flex flex-col justify-between items-center'>
                <div className='w-full '>
                    <h2 className=' text-lg font-semibold text-center w-ful'>Learing React </h2>
                    <p className='rounded-xl text-gray-500 p-2 m-1 cursor-pointer'
                    > Rearing react with lucky.. </p>
                </div>

                <button className=" cursor-pointer w-[90%] mb-1 rounded-2xl bg-red-800 hover:bg-red-900 text-white"> Remove
                </button>
            
            </div>
        </div>
  )
}

export default Card
