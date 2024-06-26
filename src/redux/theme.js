import { createSlice } from "@reduxjs/toolkit";
import { dispach } from "./store";

const initialState ={
    theme: JSON.parse(window?.localStorage.getItem("theme")) ?? "light",
};

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        setTheme(state, action){
            state.theme = action.payload;
            localStorage.setItem("theme", JSON.stringify(action.payload));
    },
},
});

export default themeSlice.reducer;

export function setTheme(value){
    return (dispach)=>{
        dispach(themeSlice.actions.setTheme(value));
    };
}