/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import getIssueListApi from 'common/api/getIssueList.api';

export default function Footer() {
	const queryClient = useQueryClient();

	const [isQueryEnabled, setIsQueryEnabled] = useState(false);
	const [page, setPage] = useState(1);

	const { fetchNextPage, data, isFetchingNextPage, remove } = useInfiniteQuery(
		'issueList',
		({ pageParam = 1 }) => getIssueListApi({ page: pageParam }),
		{
			enabled: isQueryEnabled,
			getNextPageParam: () => {
				return page;
			},
		}
	);

	const handleClickNextPage = () => {
		setIsQueryEnabled(true);
		setPage(prevState => prevState + 1);
		fetchNextPage();
	};

	const handleClickReset = () => {
		remove();
		setIsQueryEnabled(false);
		setPage(1);
	};

	console.log(data);

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
