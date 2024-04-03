import { useRef } from "react";
import searchProfileFromGithub from "../logic/searchProfileFromGithub";

export default function FormSearchProfile() {
	const username = useRef("");

	return (
		<>
			<form
				className="block w-72 sm:w-96"
				onSubmit={(ev) => {
					ev.preventDefault();
					searchProfileFromGithub(username.current);
				}}
			>
				<input
					type="text"
					className="w-full bg-transparent border-b outline-none text-white p-1 font-mono"
					placeholder="Username"
					onChange={(ev) => (username.current = ev.target.value)}
				/>
				<nav className="flex w-full justify-end mt-1">
					<button className="px-3 py-1 rounded-md font-serif border text-white bg-transparent hover:text-black hover:bg-white duration-300">
						Search
					</button>
				</nav>
			</form>
		</>
	);
}
