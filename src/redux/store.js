import {configureStore} from '@reduxjs/toolkit';
import {rootReduser} from "./reduser";

const store = configureStore({
    reducer: rootReduser,
});
const {dispach} = store;
export {store, dispach};