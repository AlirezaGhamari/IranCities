"use client";
import React, { useState } from "react";
import Input from "./Input";
import Filter from "./Filter";
import SelectedCity from "./SelectedCity";
function City() {
  const [showTitle, setShowTitle] = useState(false);
  const clickHandler = () => {
    setShowTitle(!showTitle);
  };
  return (
    <div className="flex flex-col justify-center items-center w-[500px]">
      <div className="w-full  bg-red-400 overflow-auto scroll">

      <SelectedCity />
      </div>

      <div className="w-[500px] h-[500px] flex items-center  flex-col p-3">
        <Input onclick={clickHandler} />
        {showTitle ? <Filter /> : ""}
      </div>
    </div>
  );
}

export default City;
