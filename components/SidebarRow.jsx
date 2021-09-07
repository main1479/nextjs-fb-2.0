import Image from 'next/image';
export default function SidebarRow({ Icon, src, title }) {
	return (
		<div className="flex items-center space-x-2 p-3 mt-2 hover:bg-gray-200 rounded-xl cursor-pointer">
			{src && (
				<Image
					className="rounded-full"
					src={src}
					width={30}
					height={30}
					layout="fixed"
					alt="user image"
				/>
			)}
			{Icon && <Icon className="h-6 w-6 text-blue-500 mx-auto sm:mx-0" />}
			<p className="hidden sm:inline-flex font-medium">{title}</p>
		</div>
	);
}
