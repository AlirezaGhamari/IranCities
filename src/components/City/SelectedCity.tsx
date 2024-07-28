import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { removeCity } from "@/lib/slices/citiesSlice";
import React from "react";

function SelectedCity() {
  const showSelect = useAppSelector((state) => state.citiesState.selectCity);
  const dispatch = useAppDispatch();

  const handleRemoveCity = (index: number) => {
    dispatch(removeCity(index));
  };

  return (
    <div className=" p-1 flex gap-1 flex-row-reverse ">
      {showSelect.map((i, index) => (
        <p
          onClick={() => handleRemoveCity(index)}
          className="bg-slate-500 p-2 text-white rounded-lg hover:bg-slate-300 hover:text-black cursor-pointer "
          key={index}
        >
          {i}
        </p>
      ))}
    </div>
  );
}

export default SelectedCity;
