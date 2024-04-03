import { useDispatch, useSelector } from "react-redux";
import { useProfile } from "../redux/profile/slice";
import {
	changeSideBarView,
	useIsSideBarOpen,
} from "../redux/isSideBarOpen/slice";

export default function ProfilePage() {
	const isSideBarOpen = useSelector(useIsSideBarOpen);
	const dispatch = useDispatch();
	const profile = useSelector(useProfile);

	return (
		<>
			<div
				className={`${
					isSideBarOpen &&
					"fixed w-full h-full top-0 left-0 right-0 backdrop-blur-sm"
				}`}
				onClick={() => {
					dispatch(changeSideBarView());
				}}
			></div>
			<div
				className={`fixed h-full top-0 right-0 bg-black ${
					isSideBarOpen ? "w-52 sm:w-72" : "w-0"
				} transition-all duration-700`}
			>
				<div
					className={`${
						!isSideBarOpen && "hidden"
					} flex flex-col gap-2 items-center justify-evenly h-full py-5 px-2 sm:px-5`}
				>
					<img
						src={profile.avatar_url}
						alt={`Avatar of ${profile.name}`}
						className="rounded-full w-32 sm:w-52 border-2"
					/>
					<h3 className="text-white text-lg sm:text-2xl font-semibold text-center">
						{profile.name}
					</h3>
					<h4 className="text-white font-extralight text-sm sm:text-lg text-justify">
						{profile.bio}
					</h4>
					<button className="rounded-lg font-bold text-white bg-transparent border hover:text-black hover:bg-white px-4 py-2">
						<a href={profile.html_url} target="blank">
							Follow ◥
						</a>
					</button>
				</div>
			</div>
		</>
	);
}
