import { combineReducers } from "@reduxjs/toolkit";

import navigationReducer from '../features/navigationSlice';
import colorsSlice from "../features/colorsSlice";

export const rootReducer = combineReducers({
    navigation: navigationReducer,
    colors: colorsSlice
});

