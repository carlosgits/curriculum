import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  userCounter: 0,
  isNameValid: false,
  isEmailValid: false,
  isPhoneValid: false,
};

const validateName = (name) => {
  // Regex para validar un nombre (esto puede variar mucho dependiendo de tus requisitos)
  const regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(name);
};

const validateEmail = (email) => {
  // Regex simple para validar correo electrónico
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePhone = (phone) => {
  // Regex para validar número de teléfono, formato internacional (puede necesitar ajustes)
  const regex = /^\+?[1-9]\d{1,14}$/;
  return regex.test(phone);
};

export const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
      state.isNameValid = validateName(action.payload);
      updateCounter(state);
    },
    setEmail(state, action) {
      state.email = action.payload;
      state.isEmailValid = validateEmail(action.payload);
      updateCounter(state);

    },
    setPhone(state, action) {
      state.phone = action.payload;
      state.isPhoneValid = validatePhone(action.payload);
      updateCounter(state);

    },
    resetPersonalInfo() {
      return initialState; 
    },
  },
});

function updateCounter(state) {
    if (state.isNameValid && state.isEmailValid && state.isPhoneValid) {
      state.userCounter = 3;
      console.log("success")
    } else {
      
      state.userCounter = 0; // Esto es solo un ejemplo, ajusta según tu 
    }
}

export const selectName = (state) => state.users.name;
export const selectEmail = (state) => state.users.email;
export const  selectPhone = (state) => state.users.phone
export const selectCounter =(state)=> state.users.userCounter
export const validName = (state) => state.users.isNameValid
export const validEmail = (state) => state.users.isEmailValid
export const validPhone = (state) => state.users.isPhoneValid

export const { setName, setEmail, setPhone,resetPersonalInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
