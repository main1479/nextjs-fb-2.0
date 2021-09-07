import Image from 'next/image';
// import {
// 	BellIcon,
// 	ChatIcon,
// 	ChevronDownIcon,
// 	HomeIcon,
// 	UserGroupIcon,
// 	ViewGridIcon,
// } from '@heroicons/react/solid';
import {
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { useSession, signOut } from 'next-auth/client';

function Header() {
	const [session] = useSession();
	return (
		<header className="flex items-center sticky top-0 z-50 bg-white shadow-md px-2 md:px-5 py-2">
			{/* LOGO & SEARCH BAR */}
			<div className="flex">
				<Image
					className="cursor-pointer"
					src={'https://links.papareact.com/5me'}
					alt="Facebook Logo"
					width={40}
					height={40}
					layout="fixed"
				/>
				<form
					className="flex mx-2 rounded-full bg-gray-100 p-2 items-center"
					onSubmit={(e) => e.preventDefault()}
				>
					<SearchIcon className="h-6 text-gray-500" />
					<input
						className="hidden lg:flex items-center bg-transparent focus:outline-none ml-2"
						type="text"
						placeholder="Search..."
					/>
				</form>
			</div>
			{/* NAVIGATION */}
			<div className="flex justify-center flex-grow">
				<div className="flex space-x-2 xl:space-x-6">
					<HeaderIcon active Icon={HomeIcon} />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>
			{/* HEADER RIGHT */}
			<div className="flex items-center justify-end sm:space-x-2">
				<Image
					className="rounded-full cursor-pointer"
					src={session.user.image}
					width={40}
					height={40}
					layout="fixed"
					alt={session.user.name}
					onClick={signOut}
				/>
				<p className="whitespace-nowrap font-semibold p-3 cursor-pointer hover:text-gray-500">
					{session.user.name}
				</p>
				<ViewGridIcon className="icon" />
				<ChatIcon className="icon" />
				<BellIcon className="icon" />
				<ChevronDownIcon className="icon" />
			</div>
		</header>
	);
}

export default Header;
