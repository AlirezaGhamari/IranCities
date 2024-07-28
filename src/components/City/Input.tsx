import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { addValue } from "@/lib/slices/citiesSlice";
import React, {  useEffect, useState } from "react";
import Filter from "./Filter";

function Input({ onclick,onchange ,value}: {onclick: any,onchange:any,value:any}  ) {
  
  return (
    <div onClick={onclick}className="w-full"  >
      <input className="w-full bg-slate-400 p-1 rounded-lg " type="text" dir="rtl" value={value} onChange={onchange}/>
    </div>
  );
}

export default Input;
 
