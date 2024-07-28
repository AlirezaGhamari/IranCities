"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import React from "react";
import { selectCity } from "@/lib/slices/citiesSlice";

interface City {
  id: string;
  title: string;
}

function Filter() {
  const citiesTitle = useAppSelector((state) => state.citiesState.IranCities);
  const value = useAppSelector(state => state.citiesState.value);
  const dispatch = useAppDispatch();

  const filter = citiesTitle.filter((i: City) => i.title.startsWith(value));

  return (
    <div className='bg-slate-400 w-full h-auto overflow-scroll rounded-lg'>
      {filter.map((i: City) => (
        <p 
          className="bg-slate-400 w-full border flex items-center justify-center hover:bg-slate-500 hover:text-white cursor-pointer"
          key={i.id}
          onClick={() => dispatch(selectCity([i.title]))} 
        >
          {i.title}
        </p>
      ))}
    </div>
  );
}

export default Filter;
