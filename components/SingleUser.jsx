import { useRouter } from "next/router";
import Link from "next/link";

export const SingleUser = ({ img_src, first_name, last_name, email, id }) => {
	const router = useRouter();
	return (
		<Link href={`/users/${id}`}>
			<div
				onClick={() => {
					`/users/${id}`;
				}}
				className="single__user"
			>
				<img src={img_src} alt="" />
				<p>
					Name: {first_name} {last_name}
				</p>
				<p>Email: {email}</p>
			</div>
		</Link>
	);
};
