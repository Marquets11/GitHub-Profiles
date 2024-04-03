import { configureStore } from "@reduxjs/toolkit";
import { profile } from "./profile/slice";
import { isSideBarOpen } from "./isSideBarOpen/slice";

const store = configureStore({ reducer: { profile, isSideBarOpen } });

export default store;
