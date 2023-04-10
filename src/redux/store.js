import { configureStore } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage"
import {authReducer} from "./features/authSlice";
import { adminReducer } from "./features/adminSlice";
import { questionReducer } from "./features/QuestionSlice";
import { feedbackReducer } from "./features/feedbackSlice";
import { settingReducer } from "./features/setting";

const persistConfig={
    key:'persistCollection',
    storage
}

const reducer = combineReducers({
    auth:authReducer,
    admin:adminReducer,
    question:questionReducer,
    feedback:feedbackReducer,
    setting:settingReducer
})

const persistedReducer = persistReducer(persistConfig,reducer);
export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    
})