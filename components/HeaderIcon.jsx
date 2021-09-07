export default function HeaderIcon({ Icon, active }) {
	return (
		<div className="group p-2 md:p-4 rounded-lg transition-all hover:bg-blue-100 cursor-pointer ">
			<Icon
				className={`${active ? 'text-blue-500' : 'text-gray-600'} h-6  group-hover:text-blue-500`}
			/>
		</div>
	);
}
