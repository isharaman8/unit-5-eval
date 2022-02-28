import { useRouter } from "next/router";
import axios from "axios";
export default function SingleUser({ user }) {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div>
			<img src={user.avatar} alt="" />
			<p>
				Name: {user.first_name} {user.last_name}
			</p>
			<p>Email: {user.email}</p>
		</div>
	);
}

export async function getStaticProps(context) {
	let user = await axios.get(
		`https://reqres.in/api/users/${context.params.id}`
	);

	console.log(user.data.data);
	return {
		props: {
			user: user.data.data,
		},
	};
}

export async function getStaticPaths() {
	let paths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	for (let i = 0; i < paths.length; i++) {
		paths[i] = { params: { id: String(paths[i]) } };
	}

	return {
		paths,
		fallback: false,
	};
}
