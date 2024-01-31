/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import useGetIssueListQuery from 'common/hooks/useGetIssueListQuery';
import { useAppDispatch } from 'common/redux/store';
import { increasePage, resetPage } from 'common/redux/pageSlice';

export default function Footer() {
	const dispatch = useAppDispatch();

	const { fetchNextPage, isFetchingNextPage, remove } = useGetIssueListQuery();

	const handleClickNextPage = () => {
		dispatch(increasePage());
		fetchNextPage();
	};

	const handleClickReset = () => {
		dispatch(resetPage());
		remove();
	};

	return (
		<footer css={containerSt}>
			<button onClick={handleClickNextPage} disabled={isFetchingNextPage}>
				load
			</button>
			<button onClick={handleClickReset}>초기화</button>
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
