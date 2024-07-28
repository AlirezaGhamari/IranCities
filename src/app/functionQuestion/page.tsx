"use client"
import React from "react";

function Page({
  names = ["tehran","ahvaz","mashhad"],
  cities = [
    { name: "tehran", Temperaturs: "25c" },
    { name: "ahvaz", Temperaturs: "55c" },
    { name: "shiraz", Temperaturs: "20c" },
    { name: "mashhad", Temperaturs: "36c" }
  ],
}) {
  const matchedCities = cities.filter(city => names.includes(city.name));
  const showTemp = matchedCities.map(city => city.Temperaturs).join(' , ');

  return <div>Temperatures: {showTemp}</div>;
}

export default Page;
