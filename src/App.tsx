/** @jsxImportSource @emotion/react */

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Global, css } from '@emotion/react';

import Router from 'routes/Router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { refetchOnWindowFocus: false },
	},
});

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Global styles={[globalSt]} />
			<Router />
		</QueryClientProvider>
	);
}

const globalSt = css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		width: 100%;
		height: 100%;
		font-size: 16px;
	}

	#root {
		height: 100%;
	}
`;
