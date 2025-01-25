// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// Redux Toolkit

export const store = configureStore({
  reducer: {},
});

// CUSTOM STORE HOOKS FOR BETTER NAME CONVENTION ;)
export const useReduxDispatch: () => typeof store.dispatch = useDispatch;
export const useReduxSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
// CUSTOM STORE HOOKS FOR BETTER NAME CONVENTION (;
