/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import Header from 'common/components/Header';
import Footer from 'common/components/Footer';

export default function Layout() {
	return (
		<div css={containerSt}>
			<Header />
			<main css={mainSt}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

const containerSt = css`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-rows: 64px auto 64px;
	grid-template-columns: 1fr;
`;

const mainSt = css`
	width: 100%;
	height: 100%;

	overflow: auto;
`;
