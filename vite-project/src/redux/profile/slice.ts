import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Profile {
	id: number;
	name: string;
	bio: string;
	avatar_url: string;
	login: string;
	html_url: string;
}

const initialState: Partial<Profile> = {};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		defineTheCurrentProfile(state, { payload }: PayloadAction<Profile>) {
			return payload;
		},
	},
});

export const profile = profileSlice.reducer;
export const { defineTheCurrentProfile } = profileSlice.actions;
export const useProfile = (state: any) => {
	return state.profile as Profile;
};
