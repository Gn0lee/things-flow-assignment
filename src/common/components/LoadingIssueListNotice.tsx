/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function LoadingIssueListNotice() {
	return (
		<div css={containerSt}>
			<div css={contentSt}>issue 10개 로딩 시작</div>
		</div>
	);
}

const containerSt = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const contentSt = css`
	width: max-content;
	white-space: pre-line;

	padding: 16px;

	background: blanchedalmond;

	border: 1px solid dimgrey;
`;
