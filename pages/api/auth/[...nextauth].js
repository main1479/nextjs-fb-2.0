import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
	providers: [
		// OAuth authentication providers...
		Providers.Facebook({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
			signinUrl: 'https://nextjs-fb-2-0.vercel.app/api/auth/signin/facebook',
			callbackUrl: 'https://nextjs-fb-2-0.vercel.app/api/auth/callback/facebook',
		}),
	],
});
