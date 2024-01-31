/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function Footer() {
	return (
		<footer css={containerSt}>
			<button>load</button>
			<button>초기화</button>
		</footer>
	);
}

const containerSt = css`
	display: flex;

	padding: 16px 24px;

	align-items: center;
	justify-content: space-between;

	height: 64px;

	background: beige;
`;
