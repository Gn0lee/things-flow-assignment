import { Route, Routes } from 'react-router-dom';

import Layout from 'common/layout/Layout';
import IssuePages from 'common/components/IssuePages';
import IssueDetail from 'common/components/IssueDetail';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<IssuePages />} />
				<Route path=":issueNumber" element={<IssueDetail />} />
			</Route>
		</Routes>
	);
}
