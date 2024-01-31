import { Route, Routes } from 'react-router-dom';

export default function Router() {
	return (
		<Routes>
			<Route path="/">
				<Route path="" element={<h1>홈화면</h1>} />
				<Route path=":id" element={<h1>상세화면</h1>} />
			</Route>
		</Routes>
	);
}
