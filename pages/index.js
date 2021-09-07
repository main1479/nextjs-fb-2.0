import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { db } from '../firebase';

export default function Home({ session, posts }) {
	if (!session) return <Login />;
	return (
		<div>
			<Head>
				<title>Facebook 2.0</title>
				<meta name="description" content="Facebook clone with NEXT.JS" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			{/* HEADER */}
			<Header />

			<main className="flex">
				{/* SIDEBAR */}
				<Sidebar />

				{/* FEED */}
				<Feed posts={posts} />

				{/* WIDGETS */}
				<Widgets />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);

	const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();
	const docs = posts.docs.map((post) => ({
		id: post.id,
		...post.data(),
		timestamp: null,
	}));
	return {
		props: {
			session,
			posts: docs,
		},
	};
}
