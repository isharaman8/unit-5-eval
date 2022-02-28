import styles from "../styles/Home.module.css";
import axios from "axios";
import { SingleUser } from "../components/SingleUser";

export default function Home({ users }) {
	return (
		<div className={styles.container}>
			{users.data.map((oneUser) => {
				const { avatar, email, first_name, last_name, id } = oneUser;
				return (
					<SingleUser
						img_src={avatar}
						email={email}
						first_name={first_name}
						last_name={last_name}
						key={id}
						id={id}
					/>
				);
			})}
		</div>
	);
}

export async function getStaticProps() {
	let data = await axios.get("https://reqres.in/api/users");
	return {
		props: {
			users: data.data,
		},
	};
}
