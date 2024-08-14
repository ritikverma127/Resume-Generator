import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  section1: [],
  section2: [],
  section3: [],
  section4:[],
  themecolor:null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddMultipleDivs: (state, action) => {
      state.cart.push(action.payload);
    },
    RemoveDiv: (state, action) => {
      state.cart = state.cart.filter(star => star.id !== action.payload);
    },
    Section1Addfunction: (state, action) => {
      state.section1.push(action.payload);
    },
    Section2Addfunction: (state, action) => {
      state.section2.push(action.payload);
    },
    Section3Addfunction: (state, action) => {
      state.section3.push(action.payload);
    },
    Section4Addfunction: (state, action) => {
      state.section4.push(action.payload);
    },
    ChangeThemecolorbutton:(state,action)=>{
      state.themecolor = action.payload;
    }
  }
});

export const { ChangeThemecolorbutton,AddMultipleDivs, RemoveDiv, Section1Addfunction, Section2Addfunction, Section3Addfunction,Section4Addfunction } = userSlice.actions;
export default userSlice.reducer;
