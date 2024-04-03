import { Profile, defineTheCurrentProfile } from "../redux/profile/slice";
import { changeSideBarView } from "../redux/isSideBarOpen/slice";
import store from "../redux/store";

export default function searchProfileFromGithub(username: string) {
	const getProfileFromGithub = async () => {
		const response = await fetch(`https://api.github.com/users/${username}`);

		if (!response.ok) throw new Error("User Not Found!");

		const userData = await response.json();
		return userData;
	};

	getProfileFromGithub()
		.then((res: Profile) => {
			store.dispatch(defineTheCurrentProfile(res));
			store.dispatch(changeSideBarView());
		})
		.catch((res) => alert(res));
}
