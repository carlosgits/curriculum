import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  checked: false,
  planSelected: "none",
  planPrice: 0,
  addonSelected: [],
  addonPrice: 0

};

export const planSlice = createSlice({
  name: "plans",
  initialState,

  reducers: {
    setPlan: (state, action) => {
      state.planSelected = action.payload;
     
      // Arcade plan
  if (action.payload === "Arcade" && state.checked === false) {
    state.planPrice = 9;
    console.log('Arcade plan monthly price:', state.planPrice);
  } else if (action.payload === "Arcade" && state.checked === true) {
    state.planPrice = 90; 
    console.log('Arcade plan yearly price:', state.planPrice);
  }

  // Advanced plan
  if (action.payload === "Advanced" && state.checked === false) {
    state.planPrice = 12;
    console.log('Advanced plan monthly price:', state.planPrice);
  } else if (action.payload === "Advanced" && state.checked === true) {
    state.planPrice = 120; 
    console.log('Advanced plan yearly price:', state.planPrice);
  }

  // Pro plan
  if (action.payload === "Pro" && state.checked === false) {
    state.planPrice = 15;
    console.log('Pro plan monthly price:', state.planPrice);
  } else if (action.payload === "Pro" && state.checked === true) {
    state.planPrice = 150; 
    console.log('Pro plan yearly price:', state.planPrice);
  }

    },
    setAddon: (state, action) => {
      state.addonSelected = action.payload;
console.log(state.addonSelected)

    },
    planFrequency: (state) => {
      state.checked = !state.checked;


    },
    resetPlans() {
      return initialState,
      console.log(initialState)
    },
    
  },
});

export  const {setPlan,setAddon,planFrequency,resetPlans} = planSlice.actions;
export const selectPlanSelected = (state) => state.plans.planSelected;
export const selectAddonSelected = (state) => state.plans.addonSelected;
export const selectPlanFrequency = (state) => state.plans.checked;
export const selectPlanPrice = (state) => state.plans.planPrice;


export default  planSlice.reducer;