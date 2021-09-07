import { signIn } from 'next-auth/client';
import Image from 'next/image';
export default function Login() {
	return (
		<div className="grid place-items-center">
			<Image
				src="https://links.papareact.com/t4i"
				height={300}
				width={300}
				objectFit="contain"
				alt="Facebook"
			/>
			<button
				onClick={signIn}
				className="px-8 font-semibold rounded-full py-4 border-0 bg-blue-500 text-white"
			>
				Login With Facebook
			</button>
		</div>
	);
}
