/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	rewrites: async () => [
		{
			source: '/public/project_structure.html',
			destination: '/pages/api/myMindmap.js',
		},
	],
}

module.exports = nextConfig
