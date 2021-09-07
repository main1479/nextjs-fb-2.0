import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Post from './Post';
export default function Posts({ posts }) {
	const [realtimePosts, loading, error] = useCollection(
		db.collection('posts').orderBy('timestamp', 'desc')
	);

	return (
		<div>
			{realtimePosts
				? realtimePosts.docs.map((post) => <Post key={post.id} {...post.data()} />)
				: posts.map((post) => <Post key={post.id} {...post} />)}
		</div>
	);
}
