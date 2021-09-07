import StoryCard from './StoryCard';

const stories = [
	{
		name: 'Mainul Islam',
		src: 'https://avatars.githubusercontent.com/u/57148171?v=4',
		profile: 'https://avatars.githubusercontent.com/u/57148171?v=4',
	},
	{
		name: 'Elon Musk',
		src: 'https://links.papareact.com/4zn',
		profile: 'https://links.papareact.com/kxk',
	},
	{
		name: 'Jeff Bezoz',
		src: 'https://links.papareact.com/k2j',
		profile: 'https://links.papareact.com/f0p',
	},
	{
		name: 'Mark Zuckerberg',
		src: 'https://links.papareact.com/xql',
		profile: 'https://links.papareact.com/snf',
	},
	{
		name: 'Bill Gates',
		src: 'https://links.papareact.com/4u4',
		profile: 'https://links.papareact.com/zvy',
	},
];

export default function Stories() {
	return (
		<div className="flex justify-center space-x-3 mx-auto">
			{stories.map((story) => (
				<StoryCard key={story.src} {...story} />
			))}
		</div>
	);
}
