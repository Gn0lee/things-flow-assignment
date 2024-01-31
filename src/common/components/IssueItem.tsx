/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import moment from 'moment';

import { IssueInfo } from 'common/types/issue.type';

interface IssueItemProps extends IssueInfo {}

export default function IssueItem({ comments, created_at, user, title, number }: IssueItemProps) {
	return (
		<a css={containerSt}>
			<div css={leftContentBoxSt}>
				<h3>
					#{number} {title}
				</h3>
				<p>
					작성자: {user.login}, 작성일: {moment(created_at).format('YYYY.MM.DD')}
				</p>
			</div>
			<p>코멘트: {comments}</p>
		</a>
	);
}

const containerSt = css`
	display: flex;

	align-items: center;
	justify-content: space-between;

	padding: 24px;

	border: 1px solid darkgray;

	border-radius: 8px;
`;

const leftContentBoxSt = css`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
