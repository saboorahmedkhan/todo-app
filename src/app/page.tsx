"use client"
import React, { useState } from 'react'

const Home = () => {
  // Define State

  const [obj, setObj] = 
  useState([{Objectives:"Practice TypeScript", sNo:1},
  {Objectives:"Practice Tailwind CSS", sNo:2},
  
]);
  const [inputVal, setInput] = useState("");
  const [sNo, setsNo] = useState(0);

  // Functions

  const addItem = () => {
    let find:any = obj.find(item => item.sNo == sNo)

    if (find) {
      let newArr = obj.filter(item => item.sNo !== find.sNo)
      setObj([...newArr,{Objectives:inputVal, sNo:sNo}])
      setInput("")
      setsNo(0)
      return
    };
      setObj([...obj,{Objectives:inputVal, sNo:sNo}])
      setInput("")
      setsNo(0)
  };
  const editItem = (sNo:any) => {
    let find:any = obj.find(item => item.sNo == sNo)
    setInput(find.Objectives)
    setsNo(find.sNo)
  };
  const deleteItem = (sNo:any) => {
    let newArr = obj.filter(item => item.sNo !== sNo)
      setObj([...newArr])
  }


  return (
    <div className='max-w-4xl mx-auto p-5'>
      <h1 className='text-center text-3xl underline'>Todo App</h1>

      {/* Start Input Div */}
      <div className='flex justify-between gap-4 mt-5'>
        <input 
        type="text"
        value={inputVal}
        onChange={(event) => setInput(event.target.value)}
        className='w-[60%] p-2 ml-3 text-lg border-b focus:outline-none'
         placeholder='Write objectives'
         />
        <input 
        type="number"
        value={sNo}
        onChange={(event:any) => setsNo(event.target.value)}
        className='w-[20%] p-2 ml-3 text-lg border-b focus:outline-none'
         placeholder='Write S.No'/>
        <button onClick={addItem}
        className='bg-blue-500 hover:bg-blue-300 w-[20%] p-2 rounded  text-white'>
          Add Objectives
          </button>
      </div>
      {/* End Input Div */}
      <h1 className='text-center text-3xl underline mt-5'>Objective List</h1>

      {/*Objective List */}
      <div className="grid grid-cols-2 gap-4 mt-5">
        {/* Grid Item */}
        
        {
          obj.map((item:any, i:any) =>{
              return(
                <div className='bg-blue-100 p-4' key={i}>
        <div className='flex justify-between'>
          <span className='shadow shadow-gray-700 rounded-full h-6 w-6 text-center '>
            {i+1}
            </span>
          <span onClick={() => deleteItem (item.sNo)} className='shadow shadow-gray-700 rounded-full h-6 w-6 text-center cursor-pointer text-red-600'>X</span>
        </div>
        {/* Data Div */}
        <div className='mt-5 text-[30px] text-gray-700'>
          {item.Objectives}
        </div>
        <div>
          <h2 onClick={() => editItem(item.sNo)} className='text-right cursor-pointer'>Edit</h2>
        </div>
      </div>
              )
          })
        }
    </div>
</div>
  )
}

export default Home