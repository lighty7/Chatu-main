import { combineReducers } from "@reduxjs/toolkit"; 
import userSlice from "./postSlice"
import themeSlice from "./theme"
import postSlice from "./postSlice"

const rootReduser =  combineReducers({
    user:userSlice,
    theme:themeSlice,
    posts:postSlice,
});
export{rootReduser};