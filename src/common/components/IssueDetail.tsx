/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import useGetIssueQuery from 'common/hooks/useGetIssueQuery';

export default function IssueDetail() {
	const { data } = useGetIssueQuery();

	if (data === undefined) {
		return null;
	}

	const {
		title,
		comments,
		created_at: createdAt,
		user: { avatar_url: avatarUrl, login },
		body,
		number,
	} = data;

	return (
		<div css={containerSt}>
			<div css={contentBoxSt}>
				<div css={headerBox}>
					<img alt={login} src={avatarUrl} css={avatarSt} />
					<div css={leftContentBoxSt}>
						<h3>
							#{number} {title}
						</h3>
						<p>
							작성자: {login}, 작성일: {moment(createdAt).format('YYYY.MM.DD')}
						</p>
					</div>
					<p>코멘트: {comments}</p>
				</div>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
			</div>
		</div>
	);
}

const containerSt = css`
	display: flex;
	justify-content: center;

	width: 100%;

	padding: 24px 16px;
`;

const contentBoxSt = css`
	display: flex;
	flex-direction: column;
	gap: 16px;

	width: 100%;
	max-width: 700px;
`;

const avatarSt = css`
	width: 64px;
	height: 64px;

	border-radius: 50%;

	object-fit: contain;
`;

const leftContentBoxSt = css`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const headerBox = css`
	display: flex;
	justify-content: space-between;

	gap: 24px;

	border-bottom: 1px dashed black;

	padding: 16px;
`;
