"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Filter from "./Filter";
import SelectedCity from "./SelectedCity";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { addValue } from "@/lib/slices/citiesSlice";
function City() {
  const [showTitle, setShowTitle] = useState(false);
  const clickHandler = () => {
    setShowTitle(!showTitle);
  };
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.citiesState.value);

  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (inputValue != "") {
      dispatch(addValue(inputValue));
      setShowTitle(true);

      
    } if(inputValue=="") {
    }
  }, [inputValue, dispatch, value, showTitle]);

  return (
    <div className="flex flex-col justify-center items-center w-[500px]">
      <div className="w-full   overflow-x-scroll">
        <SelectedCity />
      </div>

      <div className="w-[500px] h-[500px] flex items-center  flex-col p-3">
        <Input
          onclick={clickHandler}
          onchange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          value={inputValue}
        />
        {showTitle  ? <Filter /> : ""}
        {/* {inputValue=="" ? <Filter />:""} */}
      </div>
    </div>
  );
}

export default City;
