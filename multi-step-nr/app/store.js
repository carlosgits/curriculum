"use client"

import {configureStore} from "@reduxjs/toolkit"
import planReducer from "@/app/features/plans/planSlice"
import userReducer from "@/app/features/plans/userSlice"

export const store = configureStore({
   reducer: {
    plans: planReducer,
    users: userReducer
   }
})