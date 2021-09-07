import '../styles/globals.css';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
	return (
		<Provider
			options={{
				site: 'https://nextjs-fb-2-0.vercel.app',
			}}
			session={pageProps.session}
		>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
