import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const isSideBarOpenSlice = createSlice({
	name: "isSideBarOpen",
	initialState,
	reducers: {
		changeSideBarView(state) {
			return !state;
		},
	},
});

export const isSideBarOpen = isSideBarOpenSlice.reducer;
export const { changeSideBarView } = isSideBarOpenSlice.actions;
export const useIsSideBarOpen = (state: any) => {
	return state.isSideBarOpen as boolean;
};
