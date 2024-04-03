import FormSearchProfile from "../components/FormSearchProfile";
import ProfilePage from "./ProfilePage";

export default function Home() {
	return (
		<>
			<ProfilePage />
			<div className="h-screen bg-stone-800 flex flex-col justify-center items-center gap-10">
				<div className="flex flex-col items-center">
					<h1 className="text-7xl text-white font-bold">Find</h1>
					<h2 className="text-white text-2xl font-thin">your Profile</h2>
				</div>
				<FormSearchProfile />
			</div>
		</>
	);
}
