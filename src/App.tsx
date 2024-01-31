import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router from 'routes/Router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { refetchOnWindowFocus: false },
	},
});

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	);
}
