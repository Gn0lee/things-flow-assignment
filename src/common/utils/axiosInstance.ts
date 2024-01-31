import axios from 'axios';

export const githubApiInstance = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		'X-GitHub-Api-Version': '2022-11-28',
		Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
	},
});
