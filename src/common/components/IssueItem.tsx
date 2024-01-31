/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import { IssueInfo } from 'common/types/issue.type';

interface IssueItemProps extends IssueInfo {}

export default function IssueItem({ comments, created_at: createAt, user, title, number, id }: IssueItemProps) {
	const navigate = useNavigate();

	const handleClickItem = () => {
		navigate(`/${id}`);
	};

	return (
		<button css={containerSt} onClick={handleClickItem}>
			<div css={leftContentBoxSt}>
				<h3>
					#{number} {title}
				</h3>
				<p>
					작성자: {user.login}, 작성일: {moment(createAt).format('YYYY.MM.DD')}
				</p>
			</div>
			<p>코멘트: {comments}</p>
		</button>
	);
}

const containerSt = css`
	display: flex;

	align-items: center;
	justify-content: space-between;

	padding: 24px;

	border: 1px solid darkgray;

	border-radius: 8px;

	cursor: pointer;
`;

const leftContentBoxSt = css`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
