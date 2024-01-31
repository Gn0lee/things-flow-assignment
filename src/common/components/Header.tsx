/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function Header() {
	return (
		<header css={containerSt}>
			<h1>Angular / Angular-cli</h1>
		</header>
	);
}

const containerSt = css`
	display: flex;

	align-items: center;
	justify-content: center;

	height: 64px;

	background: beige;
`;
