import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function Post({ image, message, name, postImage = null, timestamp }) {
	return (
		<div className="flex flex-col filter drop-shadow-lg my-5">
			<div className="p-5 bg-white mt-5 rounded-t-2xl ">
				<div className="flex items-center space-x-2">
					<img className="rounded-full" src={image} width={40} height={40} alt={name} />
					<div>
						<p className="font-medium cursor-pointer">{name}</p>
						{timestamp ? (
							<p className="text-xs text-gray-400">
								{new Date(timestamp?.toDate()).toLocaleString()}
							</p>
						) : (
							<p className="text-xs text-gray-400">Loading</p>
						)}
					</div>
				</div>

				<p className="pt-4">{message}</p>
			</div>
			{postImage && (
				<div className="relative h-56 md:h-96 bg-white">
					<Image src={postImage} alt="Post Image" objectFit="cover" layout="fill" />
				</div>
			)}

			{/* Post Footer */}
			<div className="flex justify-between items-center rounded-b-2xl bg-white text-gray-400 border-t">
				<div className="postIcon p-3 rounded-none rounded-bl-2xl">
					<ThumbUpIcon className="h-4" />
					<p className="text-xs sm:text-base">Like</p>
				</div>

				<div className="postIcon p-3 rounded-none">
					<ChatAltIcon className="h-4" />
					<p className="text-xs sm:text-base">Comment</p>
				</div>

				<div className="postIcon p-3 rounded-none rounded-br-2xl">
					<ShareIcon className="h-4" />
					<p className="text-xs sm:text-base">Share</p>
				</div>
			</div>
		</div>
	);
}
