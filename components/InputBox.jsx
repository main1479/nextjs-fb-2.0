import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { EmojiHappyIcon, CameraIcon, VideoCameraIcon } from '@heroicons/react/outline';
import { useRef, useState } from 'react';
import firebase from 'firebase';
import { db, storage } from '../firebase';

export default function InputBox() {
	const [session] = useSession();
	const [message, setMessage] = useState('');
	const filePickerRef = useRef(null);
	const [postImage, setPostImage] = useState(null);

	const sendPost = (e) => {
		e.preventDefault();
		if (!message) return;

		db.collection('posts')
			.add({
				message,
				name: session.user.name,
				email: session.user.email,
				image: session.user.image,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then((doc) => {
				if (postImage) {
					const uploadTask = storage.ref('posts').child(doc.id).putString(postImage, 'data_url');

					removePostImage();

					uploadTask.on(
						'state_changed',
						null,
						(error) => {
							// ERROR function
							console.log(error);
						},
						() => {
							// COMPLETE function
							storage
								.ref('posts')
								.child(doc.id)
								.getDownloadURL()
								.then((url) => {
									db.collection('posts').doc(doc.id).set(
										{
											postImage: url,
										},
										{ merge: true }
									);
								});
						}
					);
				}
			});

		setMessage('');
	};

	const imageToPost = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = (readerEvent) => {
			setPostImage(readerEvent.target.result);
		};
	};

	const removePostImage = () => {
		setPostImage(null);
	};
	return (
		<div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
			<div className="flex space-x-4 p-4 items-center">
				<Image
					className="rounded-full"
					src={session.user.image}
					width={40}
					height={40}
					layout="fixed"
					alt={session.user.name}
				/>
				<form onSubmit={sendPost} className="flex flex-1 items-center">
					<input
						className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
						type="text"
						placeholder={`What's on your mind, ${session.user.name}?`}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					{postImage && (
						<div className="group relative flex flex-col items-center ml-2">
							<img className="h-10  object-contain" src={postImage} alt="post image" />
							<p
								onClick={removePostImage}
								className="absolute -bottom-5 transition-all opacity-0 group-hover:opacity-100 group-hover:bottom-2 invisible group-hover:visible cursor-pointer text-red-300"
							>
								Remove
							</p>
						</div>
					)}
				</form>
			</div>

			<div className="flex justify-evenly p-3 border-t">
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500" />
					<p className="text-xs sm:text-sm xl:text-base">Live Video</p>
				</div>

				<div className="inputIcon" onClick={() => filePickerRef.current.click()}>
					<CameraIcon className="h-7 text-green-400" />
					<p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
					<input onChange={imageToPost} type="file" name="image" hidden ref={filePickerRef} />
				</div>

				<div className="inputIcon">
					<EmojiHappyIcon className="h-7 text-yellow-300" />
					<p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
				</div>
			</div>
		</div>
	);
}
