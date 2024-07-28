import { useAppDispatch } from "@/lib/hook";
import { addValue } from "@/lib/slices/citiesSlice";
import React, {  useEffect, useState } from "react";

function Input({ onclick }: {onclick: any}  ) {
  const dispatch=useAppDispatch()
  const[inputValue,setInputValue]=useState("");
  useEffect(() => {
    if (inputValue !== "") {
      dispatch(addValue(inputValue));
    } if(inputValue==="") {
      
    }
  }, [inputValue, dispatch]);
  
  return (
    <div onClick={onclick}className="w-full"  >
      <input className="w-full bg-slate-400  rounded-lg " type="text" dir="rtl" value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
      {/* <button onClick={()=>dispatch(addValue(inputValue))}>srch</button> */}
    </div>
  );
}

export default Input;
 
