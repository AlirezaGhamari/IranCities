import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IranCities from "@/config/IranCities.json";
// const citiesTitle = IranCities.map((item)=>item.title)
// const citiesId = IranCities.map((item)=>item.id)

interface cityState {
  IranCities: any;
  value: string;
  selectCity: string[];
}

const initialState: cityState = {
  IranCities,
  value: "",
  selectCity: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    // selectCity(state, action: PayloadAction<string[]>) {
    //   state.selectCity = [...state.selectCity, ...action.payload];
    // },
    selectCity(state, action: PayloadAction<string[]>) {
      action.payload.map((city) => {
        if (!state.selectCity.includes(city)) {
          state.selectCity.push(...action.payload);
        }
      });
    },

    removeCity(state, action: PayloadAction<number>) {
      state.selectCity.splice(action.payload, 1); // Assuming you want to remove by index
    },
  },
});

// Action creators are generated for each case reducer function
export const { addValue, selectCity, removeCity } = citiesSlice.actions;

export default citiesSlice.reducer;
